import { useState } from "react"
import axios from "axios";

const CreateQuiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState(null);
    const [question, setQuestion] = useState("");
    const [answere, setAnswere] = useState("");

    //håndtere når det skrives noe i unputfeltet
    const handleQuestionChange = (event) => {
        setQuestion(event.target.value)
    }
    const handleAnswereChange = (event) => {
        setAnswere(event.target.value)
    }
    const createQuiz = async () => {
        try{
            //sender med axios, post-req
            const response = await axios.post("/api/quizApi", {question, answers: [{answere}]})
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
      <h2>Legg til quiz-spørsmål</h2>
      <form style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
        <label htmlFor="question">Lag nytt spørsmål</label>
        <input
          id="question"
          placeholder="Legg til et spørsmål"
          type="text"
          name="question"
          value={question}
          onChange={handleQuestionChange}
        />
        <input
          id="anwere"
          placeholder="legg til et svar"
          type="text"
          name="answere"
          value={answere}
          onChange={handleAnswereChange}
        />
        <button type="submit">Send</button>
      </form>
      <section>{JSON.stringify(quiz)}</section>
    </div>
    )
}

export default CreateQuiz;