
import React,{ useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Segment,Message } from 'semantic-ui-react'


function CreateAccount ({onLoggin, setUser}) {
const [loginForm, setLoginForm] = useState({
  "email" :'',
  "password" : ''
})
const handleChange = (e) => {
  const key = e.target.name
  const value = e.target.value
  setLoginForm( {
    ...loginForm,
    [key]: value,
  })
}
const handleSubmit = (e)=>{
  e.preventDefault()
  const data = {
    "email" :loginForm.email,
    "password" : loginForm.password,
    "parkCodes" : []
  }
  fetch(`http://localhost:3002/users`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)  
    setUser(data)})
    .then(()=> {  
      onLoggin()});
  setLoginForm({
    "email" :'',
    "password" : ''
  })
}

return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='###' textAlign='center'>
        <Image src='https://www.cityhs.net/ImageRepository/Document?documentID=10654' /> Create new account
      </Header>
      <Form size='large'
      onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
          name="email"
          value={loginForm.email}
          onChange={handleChange} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password"
            value={loginForm.password}
            onChange={handleChange}
          />
          <Button color='###' fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
      <Message>
        Has an Account? <Link to='../login'>Login </Link>
      </Message>
    </Grid.Column>
  </Grid>
)}


export default CreateAccount