# FINAL PROJECT    

## Backend    

1 - API REST with SpringBoot   
2 - CRUDs  
3 - Rotina especial   
4 - Report  
5 - Tratamento de Erros  
6 - Descrição dos serviços via Swagger  
7 - Autenteicação via JWT  
8 - Separação das funcionalidades via Microsserviços  
9 - Comunicação entre MS via Feign ou outro  
10 - Rotina de deploy (nuvem AWS)  
11 - Mensageria: Kafka ou RabbitMQ  

### Database  

1 - NoSQL  
2 - SQL   

## Frontend  

## AWS  

### Database  

database: db-final-project 
username: admin 
password: finalproject

Endpoint: db-final-project.c6rfbhv0hao6.sa-east-1.rds.amazonaws.com
Porta: 3306
Zona de disponibilidade: sa-east-1a
Tamanho: db.t3.micro

------------------------------------------------------------------------------------------  

1 - Class Authority  
Long id
String name
Customer customer

2 - Class Customer  

>>> Backend						>>> Frontend
Long id 						id: number
String name  					name: string
String documentNumber  			documentNumber: string 
String mobileNumber  			mobileNumber: string 
String email 					email: string 
String password 				password: string  
								role: string 
LocalDate registrationDate		statusCd: string   
Set<Authority> authorities  	authStatus: string 


--------------------------------------------------------------------------------------------


