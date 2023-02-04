const final = [];
const randomNumber = (num) => {
        return Math.floor(Math.random() * num);
}

const messages = {
    first: ['Success is not final; failure is not fatal: It is the courage to continue that counts.',
    'It is better to fail in originality than to succeed in imitation.', 
    'The road to success and the road to failure are almost exactly the same.'],
    second:['Success usually comes to those who are too busy looking for it.',
    'Develop success from failures', 'Discouragement and failure are two of the surest stepping stones to success.',
    'Nothing in the world can take the place of Persistence', 'Talent will not; nothing is more common than unsuccessful men with talent', 'Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts.',  'Press On has solved and always will solve the problems of the human race.'],
    therth:['There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.',
    'Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.',
    'I never dreamed about success. I worked for it.',
    'Success is getting what you want, happiness is wanting what you get.']
}


for (let mess in messages){
let optionIdx = randomNumber(messages[mess].length);

switch(mess){
    case 'first': 
        final.push(`You better if you know "${messages[mess][optionIdx]}".`)
    break;
    case 'second':
        final.push(`You better if you know "${messages[mess][optionIdx]}".`)
    break;
    case 'therth':
        final.push(`You better if you know "${messages[mess][optionIdx]}".`)
    break;
    default:
        final.push('There is not enough info.')

}
}

function formatMessages(wisdom) {
    const formatted = final.join('\n')
    // console.log(formatted)

     document.getElementById('first-grid-item').innerHTML  = formatted;
     document.getElementById('second-grid-item').innerHTML = formatted;
     document.getElementById('therth-grid-item').innerHTML = formatted;
  }
//   formatMessages(final);

  let x = document.getElementById('grid-item-btn');
  x.addEventListener('click', formatMessages);

