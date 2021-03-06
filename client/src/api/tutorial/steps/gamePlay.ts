import { Step, LEFT, TOP, BOTTOM } from '@port-of-mars/client/types/tutorial';
import { CURATOR } from '@port-of-mars/shared/types';
import { ChatMarsLogView } from '@port-of-mars/client/types/panes.ts';

const steps: Array<Step> = [
  {
    target: '.tour-phase',
    content: `This is where you will find information about the current game state.`,
    params: {
      placement: LEFT,
    },
  },
  {
    target: '.tour-round',
    content: `The game progresses in rounds. The total number of rounds can vary for each game so a game may end after any number of rounds.`,
    params: {
      placement: BOTTOM,
    },
  },
  {
    target: '.tour-current-phase',
    content:
      `There are multiple phases in a round: Events, Invest, Trade, Purchase ` +
      `and Discard.`,
    params: {
      placement: BOTTOM,
    },
  },
  {
    target: '.tour-time-remaining',
    content: `Each phase has a time limit of 5 minutes. The timer will turn red and blink when 
    there is a minute left in the phase.`,
    params: {
      placement: TOP,
    },
  },
  {
    target: '.tour-ready-to-advance-button',
    content: `If you are finished with your actions before the 5 minutes are up, click here to mark that you are ready to advance the phase.
      Once everyone has signaled that they are ready to advance, the phase will end and you will all move on to the next phase.`,
    params: {
      placement: LEFT,
    },
  },
  {
    target: '.tour-phase-instructions',
    content: `Instructions for the current phase are displayed here.`,
    params: {
      placement: LEFT,
    },
  },
  {
    target: '.tour-chat',
    content:
      `At any time during the game, you can communicate with the other players ` +
      `in your habitat to plan and strategize. Remember: all chat is public ` +
      `and recorded; there are no private messages. Please adhere to the Port of ` +
      `Mars Code of Conduct in your communications. Try sending a message!`,
    params: {
      placement: LEFT,
    },
    stateTransform: [
      {
        SET_LAYOUT: 'tutorial',
        SET_CHATMARSLOG_VIEW: ChatMarsLogView.Chat,
        ADD_TO_CHAT: {
          message: 'Welcome to the Port of Mars!',
          role: CURATOR,
          dateCreated: new Date().getTime(),
          round: 0,
        },
        required: true,
      },
    ],
  },
  {
    target: '.tour-chat',
    content: 'Quiz Question',
    params: {
      placement: LEFT,
      tutorialElementId: 'chat',
    },
    stateTransform: [
      {
        SET_CHATMARSLOG_VIEW: ChatMarsLogView.Chat,
      },
    ],
  },
];

export default steps;
