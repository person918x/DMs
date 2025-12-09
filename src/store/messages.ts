import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { MessageI } from '../components/ChatBubble';

export interface MessageGroup {
  time: string,
  messages: MessageI[],
}

// Define the TS type for the counter slice's state
export interface MessagesState {
  messages: MessageGroup[];
  message: string | null;
}

// Define the initial value for the slice state
const initialState: MessagesState = {
  messages: [],
  message: null,
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Set messages
    setMessages: (state, action: PayloadAction<MessageGroup[]>) => {
      state.messages = action.payload;
    },
    // Always fail to send message but append to messages list
    addMessage: state => {
      if (state.message) {
        state.messages.push({
          time: 'Now',
          messages: [{
            incoming: false,
            message: state.message,
            status: 'Failed to send',
          }],
        });
        state.message = null;
      }
    },
    // Edit outgoing message from message field
    editMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  }
})

// Export the generated action creators for use in components
export const { setMessages, addMessage, editMessage } = messageSlice.actions

// Export the slice reducer for use in the store configuration
export default messageSlice.reducer