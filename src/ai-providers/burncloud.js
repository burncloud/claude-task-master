/**
 * burncloud.js
 * AI provider implementation for Burncloud models using Vercel AI SDK.
 */

import { createOpenAI } from '@ai-sdk/openai';
import { BaseAIProvider } from './base-provider.js';

export class BurncloudAIProvider extends BaseAIProvider {
	constructor() {
		super();
		this.name = 'Burncloud';
	}

	/**
	 * Creates and returns a Burncloud client instance.
	 * @param {object} params - Parameters for client initialization
	 * @param {string} params.apiKey - Burncloud API key
	 * @param {string} [params.baseURL] - Optional custom API endpoint (defaults to https://ai.burncloud.com/v1)
	 * @returns {Function} Burncloud client function
	 * @throws {Error} If API key is missing or initialization fails
	 */
	getClient(params) {
		try {
			const { apiKey, baseURL } = params;

			if (!apiKey) {
				throw new Error('Burncloud API key is required.');
			}

			// Use Burncloud's API endpoint
			const burncloudBaseURL = baseURL || 'https://ai.burncloud.com/v1';

			return createOpenAI({
				apiKey,
				baseURL: burncloudBaseURL
			});
		} catch (error) {
			this.handleError('client initialization', error);
		}
	}
} 