exports.handler = async (event, context) => {
    try {
        // Log incoming request for debugging
        console.log('Incoming event:', event);

        // Check if the payload exists
        if (!event.body) {
            throw new Error('No payload received');
        }

        // Parse the incoming payload
        const body = JSON.parse(event.body);
        console.log('Parsed payload:', body);

        // Validate payload structure (ensure required fields exist)
        if (!body.sys || !body.sys.type) {
            throw new Error('Invalid payload structure');
        }

        // Process the webhook payload
        console.log(`Entry ID: ${body.sys.id}, Type: ${body.sys.type}`);

        // Respond with success
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Webhook received successfully!' }),
        };
    } catch (error) {
        console.error('Error processing webhook:', error);

        // Respond with error
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Webhook processing failed!' }),
        };
    }
};