import React from 'react'
import css from './box.module.css'



class Box extends React.Component {

    

    render(){

        return (
            <div className={css.box}>
                <button 
                    className={css.button} 
                    onClick={() => {
                        this.props.sumar(this.props.index)
                    }}
                >
                    +
                </button>
                <div 
                    className={css.number}
                >
                    {this.props.number}
                </div>
                <button 
                    className={css.button} 
                    onClick={() => {
                        this.props.restar(this.props.index)
                    }}
                >
                    -
                </button>
                <button 
                    className={css.button} 
                    onClick={() => {
                        this.props.removeBox(this.props.index)
                    }}
                >
                    Eliminar
                </button>
            </div>
        )       
    }
}
export default Box