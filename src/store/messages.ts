import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';
import type { MessageI } from '../components/ChatBubble';

export interface MessageGroup {
  time: string,
  messages: MessageI[],
}

// Define the TS type for the counter slice's state
export interface MessageState {
  messages: MessageGroup[];
  message: string | undefined;
  loading: boolean;
}

// Define the initial value for the slice state
const initialState: MessageState = {
  messages: [],
  message: '',
  loading: false,
}

export const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    // Set messages
    setMessages: create.reducer<MessageGroup[]>((state, action) => {
      state.messages = action.payload;
      state.loading = false;
    }),
    // Edit outgoing message from message field
    editMessage: create.reducer<string>((state, action) => {
      state.message = action.payload;
    }),
    // Always fail to send message but append to messages list after short simulated delay
    addMessage: create.asyncThunk(
      async (_, { getState }) => {
        const state = getState() as MessageState;
        const message = state.message || '';
        await timeout(500);
        return {
          time: '',
          messages: [{
            incoming: false,
            message,
            status: 'Failed',
          }],
        } as MessageGroup;
      },
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state, _action) => {
          state.loading = false
        },
        fulfilled: (state, action) => {
          state.loading = false
          state.messages.push(action.payload as unknown as MessageGroup)
          state.message = '';
        },
      }
    )
  }),
})

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Export the generated action creators for use in components
export const { setMessages, editMessage, addMessage } = messageSlice.actions

// Export the slice reducer for use in the store configuration
export default messageSlice.reducer