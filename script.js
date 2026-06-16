const categories = [
  {
    title: 'Vegetables / سبزیاں',
    icon: '🥕',
    items: [
      { name: 'Tomato', urdu: 'ٹماٹر', icon: '🍅' },
      { name: 'Onion', urdu: 'پیاز', icon: '🧅' },
      { name: 'Garlic', urdu: 'لہسن', icon: '🧄' },
      { name: 'Ginger', urdu: 'ادرک', icon: '🌿' },
      { name: 'Green Chili', urdu: 'ہری مرچ', icon: '🌶️' },
      { name: 'Potato', urdu: 'آلو', icon: '🥔' },
      { name: 'Carrot', urdu: 'گاجر', icon: '🥕' },
      { name: 'Spinach', urdu: 'پالک', icon: '🥬' },
      { name: 'Cauliflower', urdu: 'گوبھی', icon: '🥦' },
      { name: 'Cucumber', urdu: 'کھیرا', icon: '🥒' },
      { name: 'Mint', urdu: 'پودینہ', icon: '🌿' },
      { name: 'Coriander', urdu: 'ہرا دھنیا', icon: '🌿' },
      { name: 'Peas', urdu: 'مٹر', icon: '🥗' },
      { name: 'Brinjal', urdu: 'بینگن', icon: '🍆' },
      { name: 'Capsicum', urdu: 'شملہ مرچ', icon: '🫑' },
      { name: 'Bottle Gourd', urdu: 'لوکی', icon: '🥒' },
      { name: 'Okra', urdu: 'بھِنڈی', icon: '🌿' },
      { name: 'Lemon', urdu: 'لیموں', icon: '🍋' }
    ]
  },
  {
    title: 'Proteins / پروٹین',
    icon: '🍖',
    items: [
      { name: 'Chicken', urdu: 'مرغی', icon: '🍗' },
      { name: 'Beef', urdu: 'گوشت', icon: '🥩' },
      { name: 'Lamb', urdu: 'مٹن', icon: '🍖' },
      { name: 'Fish', urdu: 'مچھلی', icon: '🐟' },
      { name: 'Egg', urdu: 'انڈہ', icon: '🥚' },
      { name: 'Paneer', urdu: 'پنیر', icon: '🧀' },
      { name: 'Yogurt', urdu: 'دہی', icon: '🥛' },
      { name: 'Dates', urdu: 'کھجور', icon: '🌴' },
      { name: 'Mutton', urdu: 'مٹن', icon: '🍖' }
    ]
  },
  {
    title: 'Grains & Staples / اناج اور بنیادی اشیاء',
    icon: '🌾',
    items: [
      { name: 'Rice', urdu: 'چاول', icon: '🍚' },
      { name: 'Wheat Flour', urdu: 'آٹا', icon: '🌾' },
      { name: 'Lentils', urdu: 'دال', icon: '🥣' },
      { name: 'Chickpeas', urdu: 'چنے', icon: '🥫' },
      { name: 'Gram Flour', urdu: 'بیسن', icon: '🟤' },
      { name: 'Mung Beans', urdu: 'مونگ', icon: '🥣' },
      { name: 'Milk', urdu: 'دودھ', icon: '🥛' },
      { name: 'Butter', urdu: 'مکھن', icon: '🧈' },
      { name: 'Ghee', urdu: 'گھی', icon: '🍯' },
      { name: 'Vegetable Oil', urdu: 'تیل', icon: '🛢️' },
      { name: 'Sugar', urdu: 'چینی', icon: '🍬' },
      { name: 'Semolina', urdu: 'سوہن', icon: '🍨' },
      { name: 'Bread', urdu: 'ڈبل روٹی', icon: '🍞' }
    ]
  },
  {
    title: 'Spices & Seasoning / مصالحہ جات',
    icon: '🧂',
    items: [
      { name: 'Cumin', urdu: 'زیرہ', icon: '🌱' },
      { name: 'Coriander Powder', urdu: 'دھنیا پاؤڈر', icon: '🟤' },
      { name: 'Turmeric', urdu: 'ہلدی', icon: '🟡' },
      { name: 'Red Chili Powder', urdu: 'سرخ مرچ پاؤڈر', icon: '🌶️' },
      { name: 'Garam Masala', urdu: 'گرم مصالحہ', icon: '🧂' },
      { name: 'Black Pepper', urdu: 'کالی مرچ', icon: '⚫' },
      { name: 'Salt', urdu: 'نمک', icon: '🧂' },
      { name: 'Fenugreek', urdu: 'میتھی', icon: '🌿' },
      { name: 'Tomato Paste', urdu: 'ٹماٹو پیسٹ', icon: '🍅' },
      { name: 'Fresh Cream', urdu: 'تازہ کریم', icon: '🥛' },
      { name: 'Cardamom', urdu: 'الائچی', icon: '🌿' },
      { name: 'Cloves', urdu: 'لونگ', icon: '🌰' },
      { name: 'Cinnamon', urdu: 'دارچینی', icon: '🥀' },
      { name: 'Bay Leaf', urdu: 'تیز پات', icon: '🍃' },
      { name: 'Nutmeg', urdu: 'جاوتری', icon: '🌰' }
    ]
  }
];

const recipes = [
  {
    name: 'Chicken Biryani',
    ingredients: ['Chicken', 'Rice', 'Onion', 'Garlic', 'Ginger', 'Garam Masala', 'Tomato Paste', 'Yogurt', 'Mint', 'Coriander'],
    description: 'A fragrant chicken and rice dish with classic Pakistani spices.',
    steps: [
      'Marinate the chicken with yogurt, garlic paste, ginger paste, garam masala, red chili powder, and salt.',
      'Fry sliced onions until golden and keep half for garnish.',
      'Add the marinated chicken and cook until the oil separates.',
      'Boil rice with whole spices until it is 70% cooked.',
      'Layer the chicken and rice, sprinkle mint, coriander, fried onions, and ghee.',
      'Cover and cook on low heat for 20-25 minutes until the rice is fully done.'
    ],
    video: 'https://www.youtube.com/results?search_query=chicken+biryani+pakistani+recipe'
  },
  {
    name: 'Daal Chawal',
    ingredients: ['Lentils', 'Rice', 'Tomato', 'Garlic', 'Turmeric', 'Cumin', 'Ghee', 'Onion'],
    description: 'Comforting lentils served with plain rice and seasoned with aromatic spices.',
    steps: [
      'Wash the lentils and cook them with water, turmeric, and salt until soft.',
      'Prepare a tadka by frying cumin seeds and chopped garlic in ghee.',
      'Add chopped onions and tomatoes to the tadka and cook until soft.',
      'Pour the tadka over the cooked lentils and simmer for a few minutes.',
      'Serve hot with steamed rice.'
    ],
    video: 'https://www.youtube.com/results?search_query=daal+chawal+recipe'
  },
  {
    name: 'Aloo Gosht',
    ingredients: ['Beef', 'Potato', 'Onion', 'Garlic', 'Ginger', 'Tomato', 'Red Chili Powder'],
    description: 'A hearty meat-and-potato curry popular in Pakistani homes.',
    steps: [
      'Heat oil and fry onions until golden brown.',
      'Add ginger-garlic paste and cook for a minute.',
      'Add beef pieces, salt, red chili powder, and cook until browned.',
      'Add chopped tomatoes and simmer until the beef is tender.',
      'Add potatoes and cook until they are soft and the gravy is thick.'
    ],
    video: 'https://www.youtube.com/results?search_query=aloo+gosht+recipe'
  },
  {
    name: 'Palak Paneer',
    ingredients: ['Spinach', 'Paneer', 'Garlic', 'Onion', 'Cumin', 'Fresh Cream'],
    description: 'A creamy spinach curry cooked with fresh paneer cubes.',
    steps: [
      'Blanch spinach leaves and blend into a smooth puree.',
      'Sauté cumin seeds, chopped onions, and garlic until fragrant.',
      'Add spinach puree and cook for a few minutes.',
      'Add paneer cubes, salt, and simmer gently.',
      'Stir in fresh cream before serving.'
    ],
    video: 'https://www.youtube.com/results?search_query=palak+paneer+recipe'
  },
  {
    name: 'Egg Bhurji',
    ingredients: ['Egg', 'Onion', 'Tomato', 'Green Chili', 'Coriander', 'Turmeric'],
    description: 'Spiced scrambled eggs with tomatoes, green chili, and fresh coriander.',
    steps: [
      'Heat oil and sauté chopped onions until translucent.',
      'Add chopped tomatoes, green chili, and turmeric.',
      'Add beaten eggs and cook while stirring until just set.',
      'Garnish with chopped coriander and serve hot.'
    ],
    video: 'https://www.youtube.com/results?search_query=egg+bhurji+recipe'
  },
  {
    name: 'Chicken Karahi',
    ingredients: ['Chicken', 'Tomato', 'Onion', 'Garlic', 'Ginger', 'Green Chili', 'Coriander'],
    description: 'A popular Pakistani chicken curry made in a karahi with tomatoes and spices.',
    steps: [
      'Heat oil and add ginger-garlic paste.',
      'Add chicken pieces and cook until sealed.',
      'Add chopped tomatoes, salt, and cook until the oil separates.',
      'Stir in green chili and coriander at the end.',
      'Serve hot with naan or roti.'
    ],
    video: 'https://www.youtube.com/results?search_query=chicken+karahi+recipe'
  },
  {
    name: 'Vegetable Pulao',
    ingredients: ['Rice', 'Carrot', 'Onion', 'Cumin', 'Ghee', 'Mint'],
    description: 'A fragrant rice dish with vegetables and mild spices.',
    steps: [
      'Sauté cumin seeds in ghee, then add onions and cook until soft.',
      'Add chopped carrots and other vegetables, then stir for a few minutes.',
      'Add rice and water, season with salt.',
      'Cover and cook until rice is tender.',
      'Garnish with fresh mint before serving.'
    ],
    video: 'https://www.youtube.com/results?search_query=vegetable+pulao+recipe'
  },
  {
    name: 'Aloo Palak',
    ingredients: ['Potato', 'Spinach', 'Onion', 'Garlic', 'Cumin', 'Turmeric'],
    description: 'A simple yet flavorful spinach and potato curry.',
    steps: [
      'Heat oil and sauté cumin seeds, onions, and garlic.',
      'Add diced potatoes and turmeric, then cook for a few minutes.',
      'Add chopped spinach and cook until wilted.',
      'Add a splash of water, cover, and simmer until potatoes are tender.'
    ],
    video: 'https://www.youtube.com/results?search_query=aloo+palak+recipe'
  },
  {
    name: 'Chana Masala',
    ingredients: ['Chickpeas', 'Tomato', 'Onion', 'Garlic', 'Ginger', 'Coriander Powder', 'Cumin', 'Turmeric', 'Garam Masala'],
    description: 'A spicy and tangy chickpea curry that is a favorite in Pakistani kitchens.',
    steps: [
      'Soak and cook chickpeas until tender, or use canned chickpeas.',
      'Fry chopped onions with ginger and garlic until soft.',
      'Add chopped tomatoes, coriander powder, cumin, turmeric, and salt.',
      'Stir in cooked chickpeas and simmer until the flavors blend.',
      'Finish with garam masala and fresh coriander.'
    ],
    video: 'https://www.youtube.com/results?search_query=chana+masala+recipe'
  },
  {
    name: 'Beef Korma',
    ingredients: ['Beef', 'Onion', 'Garlic', 'Ginger', 'Yogurt', 'Cardamom', 'Cloves', 'Cinnamon', 'Garam Masala'],
    description: 'A rich and creamy beef curry with fragrant whole spices.',
    steps: [
      'Fry sliced onions until caramelized.',
      'Add ginger-garlic paste and cook briefly.',
      'Add beef pieces and brown well on all sides.',
      'Stir in yogurt and ground spices, then simmer until beef is tender.',
      'Garnish with garam masala and serve with rice or roti.'
    ],
    video: 'https://www.youtube.com/results?search_query=beef+korma+recipe'
  }
];

const ingredientsList = document.getElementById('ingredientsList');
const resultsElement = document.getElementById('results');
const findButton = document.getElementById('findButton');

function createIngredientCards() {
  categories.forEach((category) => {
    const block = document.createElement('div');
    block.className = 'category-block';

    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = `${category.icon} ${category.title}`;

    const grid = document.createElement('div');
    grid.className = 'ingredients-grid';

    category.items.forEach((ingredient) => {
      const label = document.createElement('label');
      label.className = 'ingredient-card';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = ingredient.name;
      
      // Toggle a highlight class when checkboxes change state
      input.addEventListener('change', () => {
        if (input.checked) {
          label.classList.add('selected');
        } else {
          label.classList.remove('selected');
        }
      });

      const icon = document.createElement('span');
      icon.className = 'ingredient-icon';
      icon.textContent = ingredient.icon;

      const text = document.createElement('div');
      text.className = 'ingredient-text';

      const name = document.createElement('span');
      name.className = 'ingredient-name';
      name.textContent = ingredient.name;

      const urdu = document.createElement('span');
      urdu.className = 'ingredient-urdu urdu';
      urdu.textContent = ingredient.urdu;

      text.appendChild(name);
      text.appendChild(urdu);

      label.appendChild(input);
      label.appendChild(icon);
      label.appendChild(text);
      grid.appendChild(label);
    });

    block.appendChild(title);
    block.appendChild(grid);
    ingredientsList.appendChild(block);
  });
}

function getSelectedIngredients() {
  return Array.from(document.querySelectorAll('#ingredientsList input:checked')).map(
    (input) => input.value
  );
}

function findMatchingRecipes(selected) {
  return recipes
    .map((recipe) => {
      const matchCount = recipe.ingredients.filter((item) => selected.includes(item)).length;
      return {
        ...recipe,
        matchCount,
        total: recipe.ingredients.length,
        score: recipe.ingredients.length ? matchCount / recipe.ingredients.length : 0
      };
    })
    .filter((recipe) => recipe.matchCount > 0)
    .sort((a, b) => b.score - a.score || b.matchCount - a.matchCount);
}

function renderResults(recipes, selected) {
  resultsElement.innerHTML = '';

  if (selected.length === 0) {
    resultsElement.innerHTML = '<p class="no-results">Select ingredients first to see dish ideas.</p>';
    return;
  }

  if (recipes.length === 0) {
    resultsElement.innerHTML = '<p class="no-results">No dishes match the selected ingredients. Try adding more items.</p>';
    return;
  }

  recipes.forEach((recipe) => {
    const card = document.createElement('div');
    card.className = 'result-card';

    const title = document.createElement('h3');
    title.textContent = recipe.name;

    const description = document.createElement('p');
    description.textContent = recipe.description;

    const ingredientList = document.createElement('p');
    ingredientList.innerHTML = `<strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}`;

    const stepsTitle = document.createElement('p');
    stepsTitle.innerHTML = '<strong>Step-by-step process:</strong>';

    const stepsList = document.createElement('ol');
    recipe.steps.forEach((step) => {
      const li = document.createElement('li');
      li.textContent = step;
      stepsList.appendChild(li);
    });

    const metaWrapper = document.createElement('div');
    metaWrapper.className = 'recipe-meta';
    
    const details = document.createElement('span');
    details.textContent = `Match: ${recipe.matchCount}/${recipe.total} ingredients • `;
    metaWrapper.appendChild(details);

    if (recipe.video) {
      const videoLink = document.createElement('a');
      videoLink.href = recipe.video;
      videoLink.target = '_blank';
      videoLink.rel = 'noreferrer';
      videoLink.innerHTML = '📺 Watch recipe on YouTube';
      metaWrapper.appendChild(videoLink);
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(ingredientList);
    card.appendChild(stepsTitle);
    card.appendChild(stepsList);
    card.appendChild(metaWrapper);
    
    resultsElement.appendChild(card);
  });
}

findButton.addEventListener('click', () => {
  const selectedIngredients = getSelectedIngredients();
  const matched = findMatchingRecipes(selectedIngredients);
  renderResults(matched, selectedIngredients);
  
  // Smooth scroll down to results section on click
  document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
});

createIngredientCards();
renderResults([], []);