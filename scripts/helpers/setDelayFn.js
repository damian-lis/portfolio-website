export default async (delay) =>
  await new Promise((resolve) => setTimeout(() => resolve(), delay))
