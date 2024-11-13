import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CountDownContainer,
    FormContainer, 
    HomeContainer, 
    MinuesAmountInput, 
    Separator, 
    StartCountdownButton, 
    TaskInput 
} from "./styles";



const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'informe a tarefa'),
    minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínio 5 minutos.')
    .max(60, ' Ociclo precisa ser de no máximo de 60 minutos'),
})



export function Home() {
    const { register, handleSubmit, watch} = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task:'',
            minutesAmount: 0,
        }
    })

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data)
    }


    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput  
                    id="task" 
                    placeholder="Dê um nome para o seu projeto" 
                    list="task-suggestions"
                    {...register('task')}

                />

                <datalist id="task-suggestions">
                    <option value="Projeto 1"/>
                    <option value="Projeto 2"/>
                    <option value="Projeto 3"/>
                    <option value="Banana"/>
                </datalist>

                <label htmlFor="minutesAmount">durante</label>
                <MinuesAmountInput 
                    type="number" 
                    id="minutesAmount" 
                    placeholder="00"
                    step={5}
                    min={5}
                    max={60}
                    {...register('minutesAmount', { valueAsNumber: true })}
                />

                <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span> 0 </span>
                    <span> 0 </span>
                    <Separator> : </Separator>
                    <span> 0 </span>
                    <span> 0 </span>
                </CountDownContainer>

                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}