import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';

import { CountDownContainer,
    FormContainer, 
    HomeContainer, 
    MinuesAmountInput, 
    Separator, 
    StartCountdownButton, 
    TaskInput 
} from "./styles";



export function Home() {
    const { register, handleSubmit, watch } = useForm()

    function handleCreateNewCycle(data) {

    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput  
                    type="text" 
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