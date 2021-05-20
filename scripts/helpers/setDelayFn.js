export default async (delay = 0) => {
  typeof delay === 'number' &&
    (await new Promise((resolve) => setTimeout(() => resolve(), delay)))
}
