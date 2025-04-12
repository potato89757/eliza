import { ModelClass, ModelProviderName, Model, ModelSettings, EmbeddingModelSettings, ImageModelSettings } from '../src/types';

// Test function to verify model configurations
function testModelConfigurations() {
    try {
        // Test OpenAI model configuration
        const openAIConfig: Model = {
            endpoint: "https://api.openai.com/v1",
            model: {
                [ModelClass.SMALL]: {
                    name: "gpt-4o-mini",
                    maxInputTokens: 128000,
                    maxOutputTokens: 8192,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    temperature: 0.6,
                    stop: []
                } as ModelSettings,
                [ModelClass.MEDIUM]: {
                    name: "gpt-4o",
                    maxInputTokens: 128000,
                    maxOutputTokens: 8192,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    temperature: 0.6,
                    stop: []
                } as ModelSettings,
                [ModelClass.EMBEDDING]: {
                    name: "text-embedding-3-small",
                    dimensions: 1536
                } as EmbeddingModelSettings,
                [ModelClass.IMAGE]: {
                    name: "dall-e-3",
                    steps: 50
                } as ImageModelSettings
            }
        };

        // Test Bedrock model configuration
        const bedrockConfig: Model = {
            model: {
                [ModelClass.SMALL]: {
                    name: "amazon.nova-micro-v1:0",
                    maxInputTokens: 128000,
                    maxOutputTokens: 5120,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    temperature: 0.6,
                    stop: []
                } as ModelSettings,
                [ModelClass.EMBEDDING]: {
                    name: "amazon.titan-embed-text-v1"
                } as EmbeddingModelSettings,
                [ModelClass.IMAGE]: {
                    name: "amazon.nova-canvas-v1:0"
                } as ImageModelSettings
            }
        };

        // Verify configurations
        console.log("OpenAI Configuration:", JSON.stringify(openAIConfig, null, 2));
        console.log("Bedrock Configuration:", JSON.stringify(bedrockConfig, null, 2));

        // Test accessing model settings
        const openAISmallModel = openAIConfig.model[ModelClass.SMALL];
        const openAIEmbeddingModel = openAIConfig.model[ModelClass.EMBEDDING];
        const openAIImageModel = openAIConfig.model[ModelClass.IMAGE];

        console.log("\nOpenAI Small Model Settings:", openAISmallModel);
        console.log("OpenAI Embedding Model Settings:", openAIEmbeddingModel);
        console.log("OpenAI Image Model Settings:", openAIImageModel);

        console.log("\nTest completed successfully!");
        return true;
    } catch (error) {
        console.error("Test failed:", error);
        return false;
    }
}

// Run the test
testModelConfigurations(); 