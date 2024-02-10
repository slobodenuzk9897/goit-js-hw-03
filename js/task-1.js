// Напиши функцію slugify(title), яка приймає заголовок статті,
//  параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції 
// для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.



// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// Залиш цей код для перевірки ментором.

function slugify(title) {
    const toLowerCase = title.toLowerCase();
    const arr = toLowerCase.split(' ')
    const slug = arr.join('-');

    return slug;
}

console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
 console.log(slugify("Ten secrets of JavaScript")); 
 console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));












