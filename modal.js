function funCall(){
let a=document.createElement('a');
a.target='_blank';
a.href='/Login/index.html';
//then use this code for alert
if (window.confirm('Please Register an Account..  '))
{
a.click();
};
}