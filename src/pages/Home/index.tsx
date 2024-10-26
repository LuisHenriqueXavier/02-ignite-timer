import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinuesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput  
                    type="text" 
                    id="task" 
                    placeholder="Dê um nome para o seu projeto" 
                />

                <label htmlFor="minutesAmount">durante</label>
                <MinuesAmountInput 
                    type="number" 
                    id="minutesAmount" 
                    placeholder="00"
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

                <StartCountdownButton disabled type="submit">
                    <Play />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}