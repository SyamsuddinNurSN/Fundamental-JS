const list = {
    head: {
        value: 1, 
        next: {
            value: 2, 
            next: {
                value: 3, 
                next: {
                    value: 4,
                    next: null, 
                }

            }
        }

    }
}
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
console.log(list.head.next.next.next);
console.log(list.head.next.next.next.next);