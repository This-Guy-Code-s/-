import React from 'react'
import ReactDOM from 'react-dom'
import ContactBtn from '../Contact'
import Form from '../Form'
import { render } from '@testing-library/react'
 
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from '../../../redux/reducers'
import {Provider} from 'react-redux'


const store = createStore(reducer,applyMiddleware(thunk))


const props = {
	name:'Guy',
	email:'GuyTheGreat@gmail.com',
	message:'this is the message',
	
}






test('Form renders with out crashing', async ()=>{
	const {screen,getByTestId,container} = render(<Provider store={store}><Form {...props}/></Provider>)
			
		const theForm = getByTestId('theForm')


		expect(theForm).toBeTruthy()//renders
		expect(theForm).toMatchSnapshot()//matches snap shot of its self(code)
		expect(container.innerHTML).toMatch(/<form/)//form tag is converted version(HTML5) and not react

})		






test('labels render and have proper text titles', async ()=>{
	const {screen, fireEvent,getAllByPlaceholderText,getByText,getByLabelText} = render(<Provider store={store}><Form {...props}/></Provider>)
				
				let nameLabel = getByLabelText('Name:')//name label
				let emailLabel = getByLabelText('Email:')//email label
				let msgLabel = getByLabelText('Message:')//message label

				expect(nameLabel).toMatchSnapshot()
				expect(nameLabel).toBeTruthy()

				expect(emailLabel).toMatchSnapshot()
				expect(emailLabel).toBeTruthy()

				expect(msgLabel).toMatchSnapshot()
				expect(msgLabel).toBeTruthy()

})		





test('inputs render and can take values', async ()=>{
	const {screen, fireEvent,getAllByPlaceholderText,getByText,getByLabelText} = render(<Provider store={store}><Form {...props}/></Provider>)
			
				let nameVal = getAllByPlaceholderText('Name...')//name input
				let emailVal = getAllByPlaceholderText('Email...')//email input
				let msgVal = getAllByPlaceholderText('Message...')//msg input

				expect(nameVal.value).toEqual(undefined)//start out with no values(empty inputs)
				expect(emailVal.value).toEqual(undefined)//start out with no values(empty inputs)
				expect(msgVal.value).toEqual(undefined)//start out with no values(empty inputs)



				//value sent to inputs from props obj
				nameVal.value = props.name//giving the value of "Guy"
				emailVal.value = props.email//giving the value of "GuyTheGreat@gmail.com"
				msgVal.value = props.message//giving the value of "this is the message"

				//input values held change
				expect(nameVal.value).toMatch('Guy')
				expect(emailVal.value).toMatch('GuyTheGreat@gmail.com')
				expect(emailVal.value).toMatch(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
				expect(msgVal.value).toMatch('this is the message')



})		


test('inputs "name" attribute values connects/equals its proper label tag with its "for" attributes value', async ()=>{
	const {container,screen, fireEvent,getAllByPlaceholderText,getByText,getByLabelText} = render(<Provider store={store}><Form {...props}/></Provider>)
			

			//turns string form component into a string then into an Array split by the parent div of each label tag
			//then each label tag was saved to its own variable to run RegExp test confirm the "for" attributes value
			//in the label tag matches the same value as the name attribute value in the input tags
			//console.log(container.innerHTML.split('<div class="form-group">'))

			const label2Input_name = container.innerHTML.split('<div class="form-group">')[1]
			const label2Input_email = container.innerHTML.split('<div class="form-group">')[2]
			const label2Input_msg = container.innerHTML.split('<div class="form-group">')[3]

			expect(/for="name"/.test(label2Input_name) && 
						/name="name"/.test(label2Input_name)).toEqual(true)

			expect(/for="email"/.test(label2Input_email) && 
						/name="email"/.test(label2Input_email)).toEqual(true)
			
			expect(/for="message"/.test(label2Input_msg) && 
						/name="message"/.test(label2Input_msg)).toEqual(true)



})		
