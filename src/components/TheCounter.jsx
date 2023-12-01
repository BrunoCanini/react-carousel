export default function Counter(props){

    const increment = () => {

        let control = props.cardLength
        let nuovoValore = props.active

        if(nuovoValore <= control){
            nuovoValore = props.active + 1
            props.setActive(nuovoValore)
        }else{
            nuovoValore = 0
            props.setActive(nuovoValore)
        }



        // const nuovoValore = props.active + 1;
        // props.setActive(nuovoValore)
    };

    const decrement = () => {

        let control = props.cardLength
        let nuovoValore = props.active

        if(nuovoValore <= 0){
            nuovoValore = control
            props.setActive(nuovoValore)
        }else{
            nuovoValore = props.active - 1
            props.setActive(nuovoValore)
        }

        // const nuovoValore = props.active - 1;
        // props.setActive(nuovoValore)
    };

    return (
        <div className="container mx-auto text-center mt-5">
            <div className="flex justify-center gap-4">
                <button className="bg-red-400 text-xl px-4 py-3" onClick={decrement}>Decrementa</button>
                <button className="bg-blue-400 text-xl px-4 py-3" onClick={increment}>Incrementa</button>
            </div>
        </div>
    )
}