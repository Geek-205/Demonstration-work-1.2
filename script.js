function SubmitForm()
{
    var sum = 0;
    
    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Alex: 200,
    Tom: 150,
    Helena: 100
    };

    for(let summa in salaries)
    {
      if ( summa != 0)
      {
        sum += salaries[summa];
      }
    }

    document.getElementById("Conclusion").innerHTML = "<br>Сумма: " + sum + " рублей";
}