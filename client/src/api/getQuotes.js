export const getQuotes = async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    return data[Math.floor(Math.random() * data.length)].text
  } catch (e) {
    console.log("Err", e);
    return 'Что то пошло не так...'
  }
};
