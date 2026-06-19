const questionlist = [
  {
    "id": "question1",
    "dish_name": "Poblano Mole",
    "image_url": "mole_poblano.webp",
    "question": "Did you know that authentic Poblano Mole contains real Mexican chocolate?",
    "answer": "Yes! Traditional recipes call for dark, Mexican artisan chocolate. Far from making the dish sweet, the chocolate is used as a secret weapon to perfectly balance the heat and smoky flavors of the dried chili peppers, giving the sauce its signature velvet texture and complex depth."
  },
  {
    "id": "question2",
    "dish_name": "Chiles en Nogada",
    "image_url": "chiles_en_nogada.webp",
    "question": "Did you know that Puebla is the birthplace of Mexico's most patriotic dish?",
    "answer": "Legend has it that Chiles en Nogada were invented by Augustinian nuns in Puebla back in 1821 to honor the military general Agustín de Iturbide. The dish beautifully mirrors the colors of the Mexican flag: green from the poblano pepper, white from the walnut cream sauce (nogada), and red from the fresh pomegranate seeds."
  },
  {
    "id": "question3",
    "dish_name": "Cemita Poblana",
    "image_url": "cemita_poblana_sliders.webp",
    "question": "Did you know that the famous 'Cemita Poblana' has European roots?",
    "answer": "While it is a staple of Puebla’s street food today, the unique sesame-seed brioche-style bread was originally adapted from the bread brought over by European bakers during the colonial era. Combined with local fresh quesillo, avocado, and the aromatic pápalo herb, it evolved into the legendary sandwich we love today."
  }
]
export function displayDialog(question, image, text, box, close, title) {
    
    question.addEventListener('click', () => {
        questionlist.forEach(answer => {
            if (answer.id === question.id) {
              image.src = `./images/${answer.image_url}`;
              image.alt = answer.dish_name;
              title.textContent = answer.question;
              text.textContent = answer.answer;
              box.showModal();
            }
        })
    })
    close.addEventListener('click', () => {
        box.close();
    })
}