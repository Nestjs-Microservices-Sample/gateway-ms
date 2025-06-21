## Client Gateway

Client gateway is the communication point between client and services

## Dev

1. Clone repo
2. Execute npm install
3. Create .env file based in env.template
4. Run Nats
5. Run the microservices
6. Execute npm run start:dev

## Nats

```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats

```
