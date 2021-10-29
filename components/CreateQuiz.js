import { useState } from "react"
import axios from "axios";

const CreateQuiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState(null);
    const [question, setQuestion] = useState("");

    //håndtere når det skrives noe i unputfeltet
    const handleQuestionChange = (event) => {
        setQuestion(event.target.value)
    }
    const createQuiz = async () => {
        try{
            //sender med axios, post-req
            const response = await axios.post("/api/quizApi", {question})
            if(response?.data?.success){
                setQuiz(response.data.data)
            }
        }
        catch(err){
            setError(err?.response?.data?.error)
        }
        setQuestion("")
    }
    //håndtere sending av skjemaet
    const handleSubmit = async (event) => {
        event.preventDefault()
        // trigger funksjonen som sender data til api-et
        await createQuiz();
    }
    //varsle bruker om feil
    if(error){
        return(
            <p>Noe gikk galt, her er feilmeldingen: {error}</p>
        )
    }
    return(
        <div>
      <h1>Create Quiz</h1>
      <form style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
        <label htmlFor="question">Lag nytt spørsmål</label>
        <input
          id="question"
          type="text"
          name="question"
          value={question}
          onChange={handleQuestionChange}
        />
        <button type="submit">Send</button>
      </form>
      <section>{JSON.stringify(quiz)}</section>
    </div>
    )
}

export default CreateQuiz;