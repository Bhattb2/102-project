var answer = prompt('Uganda or Kenya');
var message;

if (answer === 'Uganda'){
    message = 'Oli Otya';
} else if (answer === 'Kenya') {
    message = 'Hujambo'
    
}

document.write('<h3>' + message + '</h3>');

