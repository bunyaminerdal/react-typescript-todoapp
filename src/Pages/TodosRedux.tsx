import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../todos-redux/store'
import Todoss from '../todos-redux/components/Todoss'

const TodosRedux = () => {
    return (
        <Provider store={store}>
            <Todoss />
        </Provider>
    )
}

export default TodosRedux
