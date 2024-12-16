// ------------------ API avec Interface (avec extension) ------------------

import express, { Request, Response } from 'express';

const PORT: number = 3002;

interface Numbers {
  a: number,
  b: number,
}

const app = express();

app.use(express.json());

app.post('/add', (req: Request, res: Response) => {

  const { a, b }: Numbers = req.body;

  return res.json({
    result: a + b,
  });

});

app.post('/substract', (req: Request, res: Response) => {
  
  const { a, b }: Numbers = req.body;

  return res.json({
    result: a - b,
  });

});

app.post('/multiply', (req: Request, res: Response) => {
  
  const { a, b }: Numbers = req.body;

  return res.json({
    result: a * b,
  });

});

app.post('/divide', (req: Request, res: Response) => {
  
  const { a, b }: Numbers = req.body;

  return res.json({
    result: a / b,
    modulo: a % b,
  });

});

app.listen(PORT, () => {
  console.log(`Serveur avec Interface en cours d'exécution sur le port ${PORT}`);
});
