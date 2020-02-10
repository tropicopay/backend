const mongoose = require('mongoose');

describe('connection', () => {
    var connection;

    beforeAll(async () => {
        connection = await mongoose.connect(process.env.MONGO_URL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
    });
    
    afterAll(async() => {
        await connection.close();
    });

    it('Should connect to MongoDB specified on .env', () => {
        expect(mongoose.connection.client.s.url).toEqual(process.env.MONGO_URL);
    });
})