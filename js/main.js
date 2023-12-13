

var array = [

    { 'quote': 'Be yourself; everyone else is already taken.',
        'name': 'Oscar Wilde'
    
    },
    {    'quote': 'You only live once, but if you do it right, once is enough.',
        'name': 'Mae West'
    
    },
    {'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        'name': 'Mahatma Gandhi' 
     
    },
    { 'quote': 'You miss 100% of the shots you don\'t take.',
        'name': 'Wayne Gretzy'
    
    },
    {
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.',
     'name': 'Nelson Mandela'
    },
    { 
     'quote': 'Do not take life too seriously. You will not get out alive.',
     'name': 'Elbert Hubbard'
    },
]

var btn = document.getElementById('btn')
document.getElementById('demo').innerHTML='Quote of the Day'
document.getElementById('title').innerHTML='Press the button below to recieve a random quote!'
document.getElementById('btn').innerHTML='New Quote'

btn.onclick = function (){
    text()
}
function text(){
    var random = Math.floor(Math.random()*array.length);
   
    document.getElementById('output').innerHTML = 
    `<p>"${array[random].quote}"</p>
    <p>--${array[random].name}</p>`;
   
    
}

































