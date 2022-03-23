import React,{ useState, useContext} from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'


function LoginForm ({onLoggin, setUser}) {
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
const em = loginForm.email
const data = 
    {
      "email": em,
      parkCodes: [],
    }
  fetch('http://localhost:3002/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  .then(response => response.json())
  .then(data => {
    console.log("fetch",data)
    setUser(data)})
    .then(()=> {  
      onLoggin()});

//onLoggin()
  setLoginForm({
    "email" :'',
    "password" : ''
  })
}

const requestUser = ()=>{
  fetch(`http://localhost:3002/users?`)
}


return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='###' textAlign='center'>
        <Image src='https://www.cityhs.net/ImageRepository/Document?documentID=10654' /> Log-in to your account
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
            Login
          </Button>
        </Segment>
      </Form>
      {/* <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message> */}
    </Grid.Column>
  </Grid>
)}

export default LoginForm