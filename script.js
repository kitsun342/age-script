var age = prompt('Сколько вам лет?')

age = Number(age);

if (0 < age && age <= 18){
  alert('Вы ещё молоды, вам надо учится')
}else if (age > 18 && age <= 50){
  alert('Вам нужно работать')
}else if(age > 50 && age <= 59){
  alert('Вам скоро на пенсию')
}else if (age > 50 && age <= 150){
  alert('Вы пенсионер')
}else if(age !== NaN){
  alert('Что-то пошло не так')
}