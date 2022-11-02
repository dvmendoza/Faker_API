const express = require("express")
const { faker } = require("@faker-js/faker")

const app = express()
const PORT = 8000

const createProduct = () => {
    const newFake = {
      name: faker.commerce.productName(),
      price: "$" + faker.commerce.price(),
      department: faker.commerce.department(),
    }
    return newFake
  }

  const createUser = () => {
    const newUser = {
      password: faker.internet.password(),
      email: "$" + faker.internet.email(),
      phoneNumber: faker.phone.number(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      _id: faker.random.numeric(6),
    }
    return newUser
  }

  const createCompany = () => {
    const newCompany = {
      _id: faker.random.numeric(6),
      name: faker.company.name(),
      address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
      },
    }
    return newCompany
  }

  let newFakeProduct = createProduct()
  console.log(newFakeProduct)
  newFakeUser = createUser()
  console.log(newFakeUser)
  newFakeCompany = createCompany()
  console.log(newFakeCompany)

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));


  app.get("/", (req, res) => {
    res.send("Hello World")
  })
  
  app.get("/api/users/new", (req, res) => {
    res.json(createUser())
  })
  
  app.get("/api/companies/new", (req, res) => {
    res.json(createCompany())
  })
  
  app.get("/api/user/company", (req, res) => {
    res.json({
      user: createUser(),
      company: createCompany(),
    })
  })



  app.listen(PORT, () => console.log(`EXPRESS PORT RUNNING ON ${PORT}`))

