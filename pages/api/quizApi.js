const quiz = [
  {
    question: 'Spørsmål 1',
    answers: [
      {
        answere: 'Alternativ 1',
      },
      {
        answere: 'Alternativ 2',
      },
      {
        answere: 'Alternativ 3',
      },
      {
        answere: 'Alternativ 4',
        correct: true,
      },
    ],
  },
  {
    question: 'Spørsmål 2',
    answers: [
      {
        answere: 'Alternativ 1',
      },
      {
        answere: 'Alternativ 2',
      },
      {
        answere: 'Alternativ 3',
      },
      {
        answere: 'Alternativ 4',
        correct: true,
      },
    ],
  },
]

export default function handler(req, res) {
  if(req.method === "POST"){
    const data = req.body;
    //får ikke til denne testen, den slår aldri inn
    if(!data.question || !data.answers){
      res.status(400)
      .json({success: false, error: "Fyll ut alle nødvendige data"})
    }
   else{
      quiz.push(data);
    res.status(201).json({success: true, data: quiz})
    }
    
  }else if(req.method === "PUT"){
    res.status(405).end()
  }
  else{
    res.status(200).json({success: true, data: quiz})
  }
}