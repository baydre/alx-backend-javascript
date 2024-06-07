export default function guardrail(mathfunction) {
  const queue = [];
  let res;

  try {
    res = mathfunction();
  } catch (error) {
    res = error.toString();
  }

  queue.push(res);
  queue.push('Guardrail was processed');

  return queue;
}
