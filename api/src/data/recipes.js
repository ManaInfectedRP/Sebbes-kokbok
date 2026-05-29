// Canonical recipe data for the API. English only — no steps/ingredients.
// For the full bilingual dataset see frontend/src/data/recipes.js.

module.exports = [
  /* ── SWEDISH ── */
  { id: 'fish-and-chips',   name: 'Fish \'n\' Chips',            categorySlug: 'swedish',  category: 'Swedish', time: '1h',                servings: 4,  difficulty: 'Medium', emoji: '🐟', tags: ['fish','crispy','comfort','classic'] },
  { id: 'kottbullar',       name: 'Köttbullar med Gräddsås',    categorySlug: 'swedish',  category: 'Swedish', time: '1h',                servings: 4,  difficulty: 'Medium', emoji: '🍖', tags: ['meatballs','comfort','classic','swedish'] },
  { id: 'janssons-frestelse', name: 'Janssons Frestelse',       categorySlug: 'swedish',  category: 'Swedish', time: '1h',                servings: 6,  difficulty: 'Easy',   emoji: '🥘', tags: ['gratin','potato','smörgåsbord','comfort'] },
  { id: 'artsoppa',         name: 'Ärtsoppa med Fläsk',         categorySlug: 'swedish',  category: 'Swedish', time: '2h',                servings: 6,  difficulty: 'Easy',   emoji: '🫛', tags: ['soup','pork','thursday','traditional'] },
  { id: 'raggmunk',         name: 'Raggmunk med Stekt Fläsk',   categorySlug: 'swedish',  category: 'Swedish', time: '45 min',            servings: 4,  difficulty: 'Easy',   emoji: '🥞', tags: ['potato','pancakes','pork','country'] },
  { id: 'pytt-i-panna',     name: 'Pytt i Panna',               categorySlug: 'swedish',  category: 'Swedish', time: '30 min',            servings: 4,  difficulty: 'Easy',   emoji: '🍳', tags: ['hash','leftovers','weeknight','egg'] },
  { id: 'kaldolmar',         name: 'Kåldolmar',                  categorySlug: 'swedish',  category: 'Swedish', time: '2h',                servings: 4,  difficulty: 'Medium', emoji: '🥬', tags: ['cabbage','pork','comfort','classic'] },
  { id: 'kalops',           name: 'Kalops',                     categorySlug: 'swedish',  category: 'Swedish', time: '2h',                servings: 4,  difficulty: 'Medium', emoji: '🍲', tags: ['beef','stew','winter','allspice'] },
  { id: 'kladdkaka',        name: 'Kladdkaka',                  categorySlug: 'swedish',  category: 'Swedish', time: '45 min',            servings: 10, difficulty: 'Easy',   emoji: '🍫', tags: ['chocolate','cake','fudgy','easy'] },
  { id: 'kanelbullar',      name: 'Kanelbullar',                categorySlug: 'swedish',  category: 'Swedish', time: '3h',                servings: 16, difficulty: 'Medium', emoji: '🌀', tags: ['baking','fika','cardamom','yeast'] },
  { id: 'semlor',           name: 'Semlor',                     categorySlug: 'swedish',  category: 'Swedish', time: '3h 30 min',         servings: 12, difficulty: 'Hard',   emoji: '🍰', tags: ['baking','seasonal','almond','cream'] },
  { id: 'kroppkakor',       name: 'Kroppkakor',                 categorySlug: 'swedish',  category: 'Swedish', time: '2h',                servings: 4,  difficulty: 'Hard',   emoji: '🥟', tags: ['dumplings','potato','pork','regional'] },
  { id: 'wallenbergare',    name: 'Wallenbergare',              categorySlug: 'swedish',  category: 'Swedish', time: '45 min',            servings: 4,  difficulty: 'Medium', emoji: '🥩', tags: ['veal','cream','classic','elegant'] },
  { id: 'ostkaka',          name: 'Ostkaka',                    categorySlug: 'swedish',  category: 'Swedish', time: '1h 30 min',         servings: 8,  difficulty: 'Medium', emoji: '🧀', tags: ['dessert','cheese','traditional','småland'] },
  { id: 'jordgubbstarta',   name: 'Jordgubbstårta',             categorySlug: 'swedish',  category: 'Swedish', time: '2h',                servings: 10, difficulty: 'Medium', emoji: '🍓', tags: ['cake','midsommar','strawberry','celebration'] },

  /* ── KOREAN ── */
  { id: 'gujeolpan',      name: 'Gujeolpan',       nameKo: '구절판', categorySlug: 'korean', category: 'Korean', time: '1h 30 min',       servings: 6,  difficulty: 'Hard',   emoji: '🎎', tags: ['royal','colorful','traditional','wraps'] },
  { id: 'haemul-pajeon',  name: 'Haemul Pajeon',   nameKo: '해물파전', categorySlug: 'korean', category: 'Korean', time: '30 min',          servings: 4,  difficulty: 'Easy',   emoji: '🥞', tags: ['seafood','pancake','crispy','sharing'] },
  { id: 'sinseollo',      name: 'Sinseollo',        nameKo: '신선로', categorySlug: 'korean', category: 'Korean', time: '2h 30 min',       servings: 6,  difficulty: 'Hard',   emoji: '🫕', tags: ['royal','hot-pot','elaborate','festive'] },
  { id: 'samgyetang',     name: 'Samgyetang',       nameKo: '삼계탕', categorySlug: 'korean', category: 'Korean', time: '2h',              servings: 2,  difficulty: 'Medium', emoji: '🍲', tags: ['soup','chicken','ginseng','restorative'] },
  { id: 'galbi-jjim',     name: 'Galbi-jjim',       nameKo: '갈비찜', categorySlug: 'korean', category: 'Korean', time: '2h 30 min',       servings: 4,  difficulty: 'Medium', emoji: '🍖', tags: ['beef','braised','royal','festive'] },
  { id: 'japchae',        name: 'Japchae',           nameKo: '잡채',  categorySlug: 'korean', category: 'Korean', time: '1h',              servings: 4,  difficulty: 'Medium', emoji: '🍜', tags: ['noodles','vegetables','celebration','colorful'] },
  { id: 'bulgogi',        name: 'Bulgogi',           nameKo: '불고기', categorySlug: 'korean', category: 'Korean', time: '45 min + 2h',     servings: 4,  difficulty: 'Easy',   emoji: '🥩', tags: ['beef','grilled','classic','bbq'] },
  { id: 'bibimbap',       name: 'Bibimbap',          nameKo: '비빔밥', categorySlug: 'korean', category: 'Korean', time: '1h',              servings: 4,  difficulty: 'Medium', emoji: '🍚', tags: ['rice','vegetables','egg','iconic'] },
  { id: 'ganjang-gejang', name: 'Ganjang Gejang',   nameKo: '간장게장', categorySlug: 'korean', category: 'Korean', time: '30 min + 5 days', servings: 4,  difficulty: 'Hard',   emoji: '🦀', tags: ['crab','fermented','delicacy','raw'] },
  { id: 'jangjorim',      name: 'Jangjorim',         nameKo: '장조림', categorySlug: 'korean', category: 'Korean', time: '1h 30 min',       servings: 6,  difficulty: 'Easy',   emoji: '🥚', tags: ['banchan','beef','soy','pantry'] },
  { id: 'baechu-kimchi',  name: 'Baechu Kimchi',    nameKo: '배추김치', categorySlug: 'korean', category: 'Korean', time: '1h + 3 days',     servings: 10, difficulty: 'Medium', emoji: '🌶️', tags: ['fermented','staple','spicy','traditional'] },
  { id: 'sujeonggwa',     name: 'Sujeonggwa',        nameKo: '수정과', categorySlug: 'korean', category: 'Korean', time: '40 min + 4h',     servings: 6,  difficulty: 'Easy',   emoji: '🧡', tags: ['drink','cold','cinnamon','digestif'] },
  { id: 'yakgwa',         name: 'Yakgwa',            nameKo: '약과',  categorySlug: 'korean', category: 'Korean', time: '1h 30 min',       servings: 24, difficulty: 'Medium', emoji: '🍯', tags: ['cookies','honey','fried','festive'] },
  { id: 'sikhye',         name: 'Sikhye',            nameKo: '식혜',  categorySlug: 'korean', category: 'Korean', time: '30 min + 6h',     servings: 8,  difficulty: 'Medium', emoji: '🍵', tags: ['drink','rice','fermented','digestif'] },
  { id: 'tteok',          name: 'Tteok',             nameKo: '떡',   categorySlug: 'korean', category: 'Korean', time: '1h 30 min',       servings: 16, difficulty: 'Hard',   emoji: '🌈', tags: ['rice-cakes','colorful','celebration','festive'] },

  /* ── CHINESE ── */
  { id: 'mapo-tofu',       name: 'Mapo Tofu',           nameCn: '麻婆豆腐', categorySlug: 'chinese',  category: 'Chinese', time: '30 min', servings: 4, difficulty: 'Easy',   emoji: '🌶️', tags: ['tofu','spicy','sichuan','home-cooking'] },
  { id: 'egg-fried-rice',  name: 'Egg Fried Rice',      nameCn: '蛋炒饭',   categorySlug: 'chinese',  category: 'Chinese', time: '15 min', servings: 2, difficulty: 'Easy',   emoji: '🍳', tags: ['rice','egg','quick','home-cooking'] },
  { id: 'kung-pao-chicken', name: 'Kung Pao Chicken',   nameCn: '宫保鸡丁', categorySlug: 'chinese',  category: 'Chinese', time: '30 min', servings: 4, difficulty: 'Medium', emoji: '🥜', tags: ['chicken','spicy','peanuts','sichuan'] },
  { id: 'tomato-egg',      name: 'Tomato & Egg Stir-fry', nameCn: '番茄炒蛋', categorySlug: 'chinese', category: 'Chinese', time: '15 min', servings: 2, difficulty: 'Easy',   emoji: '🍅', tags: ['egg','tomato','home-cooking','quick'] },
  { id: 'dan-dan-noodles', name: 'Dan Dan Noodles',     nameCn: '担担面',   categorySlug: 'chinese',  category: 'Chinese', time: '30 min', servings: 2, difficulty: 'Medium', emoji: '🍜', tags: ['noodles','spicy','sichuan','sesame'] },

  /* ── JAPANESE ── */
  { id: 'miso-soup',        name: 'Miso Soup',          nameJa: '味噌汁',     categorySlug: 'japanese', category: 'Japanese', time: '15 min', servings: 4, difficulty: 'Easy',   emoji: '🍵', tags: ['soup','miso','dashi','everyday'] },
  { id: 'oyakodon',         name: 'Oyakodon',           nameJa: '親子丼',     categorySlug: 'japanese', category: 'Japanese', time: '20 min', servings: 2, difficulty: 'Easy',   emoji: '🥚', tags: ['chicken','egg','rice-bowl','donburi'] },
  { id: 'teriyaki-chicken', name: 'Teriyaki Chicken',   nameJa: '照り焼きチキン', categorySlug: 'japanese', category: 'Japanese', time: '30 min', servings: 4, difficulty: 'Easy',   emoji: '🍗', tags: ['chicken','glazed','japanese','easy'] },
  { id: 'gyoza',            name: 'Gyoza',              nameJa: '餃子',       categorySlug: 'japanese', category: 'Japanese', time: '1h',     servings: 4, difficulty: 'Medium', emoji: '🥟', tags: ['dumplings','pork','crispy','japanese'] },
  { id: 'katsudon',         name: 'Katsudon',           nameJa: 'カツ丼',     categorySlug: 'japanese', category: 'Japanese', time: '45 min', servings: 2, difficulty: 'Medium', emoji: '🍱', tags: ['pork','crispy','rice-bowl','donburi'] },
];
