
function fib ( number )
{
     let start = 0;
     let next = 1;
     let newnum = 1;
 
    console.log(start);
    console.log(next);

    while(newnum <= number)
    {
        console.log(newnum);

        start = next; 
        next = newnum; 
        newnum= start + next;

    }
}

fib(50);

