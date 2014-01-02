function duplicate(array)
{
    console.log(array);
    
    for (var i = 0; i < array.length; ++i)
    {
        array.push(array[i]);
        
        console.log(array);
        
        if (i > 10) break;
    }
}

duplicate([1, 2, 3]);