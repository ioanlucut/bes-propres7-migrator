/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rv.data";

export interface HotKey {
  code: HotKey_KeyCode;
  controlIdentifier: string;
}

export enum HotKey_KeyCode {
  KEY_CODE_UNKNOWN = 0,
  KEY_CODE_ANSI_A = 1,
  KEY_CODE_ANSI_B = 2,
  KEY_CODE_ANSI_C = 3,
  KEY_CODE_ANSI_D = 4,
  KEY_CODE_ANSI_E = 5,
  KEY_CODE_ANSI_F = 6,
  KEY_CODE_ANSI_G = 7,
  KEY_CODE_ANSI_H = 8,
  KEY_CODE_ANSI_I = 9,
  KEY_CODE_ANSI_J = 10,
  KEY_CODE_ANSI_K = 11,
  KEY_CODE_ANSI_L = 12,
  KEY_CODE_ANSI_M = 13,
  KEY_CODE_ANSI_N = 14,
  KEY_CODE_ANSI_O = 15,
  KEY_CODE_ANSI_P = 16,
  KEY_CODE_ANSI_Q = 17,
  KEY_CODE_ANSI_R = 18,
  KEY_CODE_ANSI_S = 19,
  KEY_CODE_ANSI_T = 20,
  KEY_CODE_ANSI_U = 21,
  KEY_CODE_ANSI_V = 22,
  KEY_CODE_ANSI_W = 23,
  KEY_CODE_ANSI_X = 24,
  KEY_CODE_ANSI_Y = 25,
  KEY_CODE_ANSI_Z = 26,
  KEY_CODE_ANSI_0 = 27,
  KEY_CODE_ANSI_1 = 28,
  KEY_CODE_ANSI_2 = 29,
  KEY_CODE_ANSI_3 = 30,
  KEY_CODE_ANSI_4 = 31,
  KEY_CODE_ANSI_5 = 32,
  KEY_CODE_ANSI_6 = 33,
  KEY_CODE_ANSI_7 = 34,
  KEY_CODE_ANSI_8 = 35,
  KEY_CODE_ANSI_9 = 36,
  KEY_CODE_ANSI_EQUAL = 37,
  KEY_CODE_ANSI_MINUS = 38,
  KEY_CODE_ANSI_RIGHT_BRACKET = 39,
  KEY_CODE_ANSI_LEFT_BRACKET = 40,
  KEY_CODE_ANSI_QUOTE = 41,
  KEY_CODE_ANSI_SEMICOLON = 42,
  KEY_CODE_ANSI_BACKSLASH = 43,
  KEY_CODE_ANSI_COMMA = 44,
  KEY_CODE_ANSI_SLASH = 45,
  KEY_CODE_ANSI_PERIOD = 46,
  KEY_CODE_ANSI_GRAVE = 47,
  KEY_CODE_ANSI_KEYPAD_DECIMAL = 48,
  KEY_CODE_ANSI_KEYPAD_PLUS = 49,
  KEY_CODE_ANSI_KEYPAD_CLEAR = 50,
  KEY_CODE_ANSI_KEYPAD_DIVIDE = 51,
  KEY_CODE_ANSI_KEYPAD_ENTER = 52,
  KEY_CODE_ANSI_KEYPAD_MINUS = 53,
  KEY_CODE_ANSI_KEYPAD_EQUALS = 54,
  KEY_CODE_ANSI_KEYPAD_0 = 55,
  KEY_CODE_ANSI_KEYPAD_1 = 56,
  KEY_CODE_ANSI_KEYPAD_2 = 57,
  KEY_CODE_ANSI_KEYPAD_3 = 58,
  KEY_CODE_ANSI_KEYPAD_4 = 59,
  KEY_CODE_ANSI_KEYPAD_5 = 60,
  KEY_CODE_ANSI_KEYPAD_6 = 61,
  KEY_CODE_ANSI_KEYPAD_7 = 62,
  KEY_CODE_ANSI_KEYPAD_8 = 63,
  KEY_CODE_ANSI_KEYPAD_9 = 64,
  KEY_CODE_F1 = 65,
  KEY_CODE_F2 = 66,
  KEY_CODE_F3 = 67,
  KEY_CODE_F4 = 68,
  KEY_CODE_F5 = 69,
  KEY_CODE_F6 = 70,
  KEY_CODE_F7 = 71,
  KEY_CODE_F8 = 72,
  KEY_CODE_F9 = 73,
  KEY_CODE_F10 = 74,
  KEY_CODE_F11 = 75,
  KEY_CODE_F12 = 76,
  KEY_CODE_F13 = 77,
  KEY_CODE_F14 = 78,
  KEY_CODE_F15 = 79,
  KEY_CODE_F16 = 80,
  KEY_CODE_F17 = 81,
  KEY_CODE_F18 = 82,
  KEY_CODE_F19 = 83,
  KEY_CODE_F20 = 84,
  KEY_CODE_FUNCTION = 85,
  KEY_CODE_RETURN = 86,
  KEY_CODE_TAB = 87,
  KEY_CODE_SPACE = 88,
  KEY_CODE_DELETE = 89,
  KEY_CODE_ESCAPE = 90,
  KEY_CODE_COMMAND = 91,
  KEY_CODE_SHIFT = 92,
  KEY_CODE_CAPS_LOCK = 93,
  KEY_CODE_OPTION = 94,
  KEY_CODE_CONTROL = 95,
  KEY_CODE_RIGHT_SHIFT = 96,
  KEY_CODE_RIGHT_OPTION = 97,
  KEY_CODE_RIGHT_CONTROL = 98,
  KEY_CODE_VOLUME_UP = 99,
  KEY_CODE_VOLUME_DOWN = 100,
  KEY_CODE_MUTE = 101,
  KEY_CODE_HELP = 102,
  KEY_CODE_HOME = 103,
  KEY_CODE_PAGE_UP = 104,
  KEY_CODE_FORWARD_DELETE = 105,
  KEY_CODE_END = 106,
  KEY_CODE_PAGE_DOWN = 107,
  KEY_CODE_LEFT_ARROW = 108,
  KEY_CODE_RIGHT_ARROW = 109,
  KEY_CODE_DOWN_ARROW = 110,
  KEY_CODE_UP_ARROW = 111,
  KEY_CODE_ISO_SELECTION = 112,
  KEY_CODE_JIS_YEN = 113,
  KEY_CODE_JIS_UNDERSCORE = 114,
  KEY_CODE_JIS_KEYPAD_COMMA = 115,
  KEY_CODE_JIS_EISU = 116,
  KEY_CODE_JIS_KANA = 117,
  UNRECOGNIZED = -1,
}

export function hotKey_KeyCodeFromJSON(object: any): HotKey_KeyCode {
  switch (object) {
    case 0:
    case "KEY_CODE_UNKNOWN":
      return HotKey_KeyCode.KEY_CODE_UNKNOWN;
    case 1:
    case "KEY_CODE_ANSI_A":
      return HotKey_KeyCode.KEY_CODE_ANSI_A;
    case 2:
    case "KEY_CODE_ANSI_B":
      return HotKey_KeyCode.KEY_CODE_ANSI_B;
    case 3:
    case "KEY_CODE_ANSI_C":
      return HotKey_KeyCode.KEY_CODE_ANSI_C;
    case 4:
    case "KEY_CODE_ANSI_D":
      return HotKey_KeyCode.KEY_CODE_ANSI_D;
    case 5:
    case "KEY_CODE_ANSI_E":
      return HotKey_KeyCode.KEY_CODE_ANSI_E;
    case 6:
    case "KEY_CODE_ANSI_F":
      return HotKey_KeyCode.KEY_CODE_ANSI_F;
    case 7:
    case "KEY_CODE_ANSI_G":
      return HotKey_KeyCode.KEY_CODE_ANSI_G;
    case 8:
    case "KEY_CODE_ANSI_H":
      return HotKey_KeyCode.KEY_CODE_ANSI_H;
    case 9:
    case "KEY_CODE_ANSI_I":
      return HotKey_KeyCode.KEY_CODE_ANSI_I;
    case 10:
    case "KEY_CODE_ANSI_J":
      return HotKey_KeyCode.KEY_CODE_ANSI_J;
    case 11:
    case "KEY_CODE_ANSI_K":
      return HotKey_KeyCode.KEY_CODE_ANSI_K;
    case 12:
    case "KEY_CODE_ANSI_L":
      return HotKey_KeyCode.KEY_CODE_ANSI_L;
    case 13:
    case "KEY_CODE_ANSI_M":
      return HotKey_KeyCode.KEY_CODE_ANSI_M;
    case 14:
    case "KEY_CODE_ANSI_N":
      return HotKey_KeyCode.KEY_CODE_ANSI_N;
    case 15:
    case "KEY_CODE_ANSI_O":
      return HotKey_KeyCode.KEY_CODE_ANSI_O;
    case 16:
    case "KEY_CODE_ANSI_P":
      return HotKey_KeyCode.KEY_CODE_ANSI_P;
    case 17:
    case "KEY_CODE_ANSI_Q":
      return HotKey_KeyCode.KEY_CODE_ANSI_Q;
    case 18:
    case "KEY_CODE_ANSI_R":
      return HotKey_KeyCode.KEY_CODE_ANSI_R;
    case 19:
    case "KEY_CODE_ANSI_S":
      return HotKey_KeyCode.KEY_CODE_ANSI_S;
    case 20:
    case "KEY_CODE_ANSI_T":
      return HotKey_KeyCode.KEY_CODE_ANSI_T;
    case 21:
    case "KEY_CODE_ANSI_U":
      return HotKey_KeyCode.KEY_CODE_ANSI_U;
    case 22:
    case "KEY_CODE_ANSI_V":
      return HotKey_KeyCode.KEY_CODE_ANSI_V;
    case 23:
    case "KEY_CODE_ANSI_W":
      return HotKey_KeyCode.KEY_CODE_ANSI_W;
    case 24:
    case "KEY_CODE_ANSI_X":
      return HotKey_KeyCode.KEY_CODE_ANSI_X;
    case 25:
    case "KEY_CODE_ANSI_Y":
      return HotKey_KeyCode.KEY_CODE_ANSI_Y;
    case 26:
    case "KEY_CODE_ANSI_Z":
      return HotKey_KeyCode.KEY_CODE_ANSI_Z;
    case 27:
    case "KEY_CODE_ANSI_0":
      return HotKey_KeyCode.KEY_CODE_ANSI_0;
    case 28:
    case "KEY_CODE_ANSI_1":
      return HotKey_KeyCode.KEY_CODE_ANSI_1;
    case 29:
    case "KEY_CODE_ANSI_2":
      return HotKey_KeyCode.KEY_CODE_ANSI_2;
    case 30:
    case "KEY_CODE_ANSI_3":
      return HotKey_KeyCode.KEY_CODE_ANSI_3;
    case 31:
    case "KEY_CODE_ANSI_4":
      return HotKey_KeyCode.KEY_CODE_ANSI_4;
    case 32:
    case "KEY_CODE_ANSI_5":
      return HotKey_KeyCode.KEY_CODE_ANSI_5;
    case 33:
    case "KEY_CODE_ANSI_6":
      return HotKey_KeyCode.KEY_CODE_ANSI_6;
    case 34:
    case "KEY_CODE_ANSI_7":
      return HotKey_KeyCode.KEY_CODE_ANSI_7;
    case 35:
    case "KEY_CODE_ANSI_8":
      return HotKey_KeyCode.KEY_CODE_ANSI_8;
    case 36:
    case "KEY_CODE_ANSI_9":
      return HotKey_KeyCode.KEY_CODE_ANSI_9;
    case 37:
    case "KEY_CODE_ANSI_EQUAL":
      return HotKey_KeyCode.KEY_CODE_ANSI_EQUAL;
    case 38:
    case "KEY_CODE_ANSI_MINUS":
      return HotKey_KeyCode.KEY_CODE_ANSI_MINUS;
    case 39:
    case "KEY_CODE_ANSI_RIGHT_BRACKET":
      return HotKey_KeyCode.KEY_CODE_ANSI_RIGHT_BRACKET;
    case 40:
    case "KEY_CODE_ANSI_LEFT_BRACKET":
      return HotKey_KeyCode.KEY_CODE_ANSI_LEFT_BRACKET;
    case 41:
    case "KEY_CODE_ANSI_QUOTE":
      return HotKey_KeyCode.KEY_CODE_ANSI_QUOTE;
    case 42:
    case "KEY_CODE_ANSI_SEMICOLON":
      return HotKey_KeyCode.KEY_CODE_ANSI_SEMICOLON;
    case 43:
    case "KEY_CODE_ANSI_BACKSLASH":
      return HotKey_KeyCode.KEY_CODE_ANSI_BACKSLASH;
    case 44:
    case "KEY_CODE_ANSI_COMMA":
      return HotKey_KeyCode.KEY_CODE_ANSI_COMMA;
    case 45:
    case "KEY_CODE_ANSI_SLASH":
      return HotKey_KeyCode.KEY_CODE_ANSI_SLASH;
    case 46:
    case "KEY_CODE_ANSI_PERIOD":
      return HotKey_KeyCode.KEY_CODE_ANSI_PERIOD;
    case 47:
    case "KEY_CODE_ANSI_GRAVE":
      return HotKey_KeyCode.KEY_CODE_ANSI_GRAVE;
    case 48:
    case "KEY_CODE_ANSI_KEYPAD_DECIMAL":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_DECIMAL;
    case 49:
    case "KEY_CODE_ANSI_KEYPAD_PLUS":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_PLUS;
    case 50:
    case "KEY_CODE_ANSI_KEYPAD_CLEAR":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_CLEAR;
    case 51:
    case "KEY_CODE_ANSI_KEYPAD_DIVIDE":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_DIVIDE;
    case 52:
    case "KEY_CODE_ANSI_KEYPAD_ENTER":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_ENTER;
    case 53:
    case "KEY_CODE_ANSI_KEYPAD_MINUS":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_MINUS;
    case 54:
    case "KEY_CODE_ANSI_KEYPAD_EQUALS":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_EQUALS;
    case 55:
    case "KEY_CODE_ANSI_KEYPAD_0":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_0;
    case 56:
    case "KEY_CODE_ANSI_KEYPAD_1":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_1;
    case 57:
    case "KEY_CODE_ANSI_KEYPAD_2":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_2;
    case 58:
    case "KEY_CODE_ANSI_KEYPAD_3":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_3;
    case 59:
    case "KEY_CODE_ANSI_KEYPAD_4":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_4;
    case 60:
    case "KEY_CODE_ANSI_KEYPAD_5":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_5;
    case 61:
    case "KEY_CODE_ANSI_KEYPAD_6":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_6;
    case 62:
    case "KEY_CODE_ANSI_KEYPAD_7":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_7;
    case 63:
    case "KEY_CODE_ANSI_KEYPAD_8":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_8;
    case 64:
    case "KEY_CODE_ANSI_KEYPAD_9":
      return HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_9;
    case 65:
    case "KEY_CODE_F1":
      return HotKey_KeyCode.KEY_CODE_F1;
    case 66:
    case "KEY_CODE_F2":
      return HotKey_KeyCode.KEY_CODE_F2;
    case 67:
    case "KEY_CODE_F3":
      return HotKey_KeyCode.KEY_CODE_F3;
    case 68:
    case "KEY_CODE_F4":
      return HotKey_KeyCode.KEY_CODE_F4;
    case 69:
    case "KEY_CODE_F5":
      return HotKey_KeyCode.KEY_CODE_F5;
    case 70:
    case "KEY_CODE_F6":
      return HotKey_KeyCode.KEY_CODE_F6;
    case 71:
    case "KEY_CODE_F7":
      return HotKey_KeyCode.KEY_CODE_F7;
    case 72:
    case "KEY_CODE_F8":
      return HotKey_KeyCode.KEY_CODE_F8;
    case 73:
    case "KEY_CODE_F9":
      return HotKey_KeyCode.KEY_CODE_F9;
    case 74:
    case "KEY_CODE_F10":
      return HotKey_KeyCode.KEY_CODE_F10;
    case 75:
    case "KEY_CODE_F11":
      return HotKey_KeyCode.KEY_CODE_F11;
    case 76:
    case "KEY_CODE_F12":
      return HotKey_KeyCode.KEY_CODE_F12;
    case 77:
    case "KEY_CODE_F13":
      return HotKey_KeyCode.KEY_CODE_F13;
    case 78:
    case "KEY_CODE_F14":
      return HotKey_KeyCode.KEY_CODE_F14;
    case 79:
    case "KEY_CODE_F15":
      return HotKey_KeyCode.KEY_CODE_F15;
    case 80:
    case "KEY_CODE_F16":
      return HotKey_KeyCode.KEY_CODE_F16;
    case 81:
    case "KEY_CODE_F17":
      return HotKey_KeyCode.KEY_CODE_F17;
    case 82:
    case "KEY_CODE_F18":
      return HotKey_KeyCode.KEY_CODE_F18;
    case 83:
    case "KEY_CODE_F19":
      return HotKey_KeyCode.KEY_CODE_F19;
    case 84:
    case "KEY_CODE_F20":
      return HotKey_KeyCode.KEY_CODE_F20;
    case 85:
    case "KEY_CODE_FUNCTION":
      return HotKey_KeyCode.KEY_CODE_FUNCTION;
    case 86:
    case "KEY_CODE_RETURN":
      return HotKey_KeyCode.KEY_CODE_RETURN;
    case 87:
    case "KEY_CODE_TAB":
      return HotKey_KeyCode.KEY_CODE_TAB;
    case 88:
    case "KEY_CODE_SPACE":
      return HotKey_KeyCode.KEY_CODE_SPACE;
    case 89:
    case "KEY_CODE_DELETE":
      return HotKey_KeyCode.KEY_CODE_DELETE;
    case 90:
    case "KEY_CODE_ESCAPE":
      return HotKey_KeyCode.KEY_CODE_ESCAPE;
    case 91:
    case "KEY_CODE_COMMAND":
      return HotKey_KeyCode.KEY_CODE_COMMAND;
    case 92:
    case "KEY_CODE_SHIFT":
      return HotKey_KeyCode.KEY_CODE_SHIFT;
    case 93:
    case "KEY_CODE_CAPS_LOCK":
      return HotKey_KeyCode.KEY_CODE_CAPS_LOCK;
    case 94:
    case "KEY_CODE_OPTION":
      return HotKey_KeyCode.KEY_CODE_OPTION;
    case 95:
    case "KEY_CODE_CONTROL":
      return HotKey_KeyCode.KEY_CODE_CONTROL;
    case 96:
    case "KEY_CODE_RIGHT_SHIFT":
      return HotKey_KeyCode.KEY_CODE_RIGHT_SHIFT;
    case 97:
    case "KEY_CODE_RIGHT_OPTION":
      return HotKey_KeyCode.KEY_CODE_RIGHT_OPTION;
    case 98:
    case "KEY_CODE_RIGHT_CONTROL":
      return HotKey_KeyCode.KEY_CODE_RIGHT_CONTROL;
    case 99:
    case "KEY_CODE_VOLUME_UP":
      return HotKey_KeyCode.KEY_CODE_VOLUME_UP;
    case 100:
    case "KEY_CODE_VOLUME_DOWN":
      return HotKey_KeyCode.KEY_CODE_VOLUME_DOWN;
    case 101:
    case "KEY_CODE_MUTE":
      return HotKey_KeyCode.KEY_CODE_MUTE;
    case 102:
    case "KEY_CODE_HELP":
      return HotKey_KeyCode.KEY_CODE_HELP;
    case 103:
    case "KEY_CODE_HOME":
      return HotKey_KeyCode.KEY_CODE_HOME;
    case 104:
    case "KEY_CODE_PAGE_UP":
      return HotKey_KeyCode.KEY_CODE_PAGE_UP;
    case 105:
    case "KEY_CODE_FORWARD_DELETE":
      return HotKey_KeyCode.KEY_CODE_FORWARD_DELETE;
    case 106:
    case "KEY_CODE_END":
      return HotKey_KeyCode.KEY_CODE_END;
    case 107:
    case "KEY_CODE_PAGE_DOWN":
      return HotKey_KeyCode.KEY_CODE_PAGE_DOWN;
    case 108:
    case "KEY_CODE_LEFT_ARROW":
      return HotKey_KeyCode.KEY_CODE_LEFT_ARROW;
    case 109:
    case "KEY_CODE_RIGHT_ARROW":
      return HotKey_KeyCode.KEY_CODE_RIGHT_ARROW;
    case 110:
    case "KEY_CODE_DOWN_ARROW":
      return HotKey_KeyCode.KEY_CODE_DOWN_ARROW;
    case 111:
    case "KEY_CODE_UP_ARROW":
      return HotKey_KeyCode.KEY_CODE_UP_ARROW;
    case 112:
    case "KEY_CODE_ISO_SELECTION":
      return HotKey_KeyCode.KEY_CODE_ISO_SELECTION;
    case 113:
    case "KEY_CODE_JIS_YEN":
      return HotKey_KeyCode.KEY_CODE_JIS_YEN;
    case 114:
    case "KEY_CODE_JIS_UNDERSCORE":
      return HotKey_KeyCode.KEY_CODE_JIS_UNDERSCORE;
    case 115:
    case "KEY_CODE_JIS_KEYPAD_COMMA":
      return HotKey_KeyCode.KEY_CODE_JIS_KEYPAD_COMMA;
    case 116:
    case "KEY_CODE_JIS_EISU":
      return HotKey_KeyCode.KEY_CODE_JIS_EISU;
    case 117:
    case "KEY_CODE_JIS_KANA":
      return HotKey_KeyCode.KEY_CODE_JIS_KANA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HotKey_KeyCode.UNRECOGNIZED;
  }
}

export function hotKey_KeyCodeToJSON(object: HotKey_KeyCode): string {
  switch (object) {
    case HotKey_KeyCode.KEY_CODE_UNKNOWN:
      return "KEY_CODE_UNKNOWN";
    case HotKey_KeyCode.KEY_CODE_ANSI_A:
      return "KEY_CODE_ANSI_A";
    case HotKey_KeyCode.KEY_CODE_ANSI_B:
      return "KEY_CODE_ANSI_B";
    case HotKey_KeyCode.KEY_CODE_ANSI_C:
      return "KEY_CODE_ANSI_C";
    case HotKey_KeyCode.KEY_CODE_ANSI_D:
      return "KEY_CODE_ANSI_D";
    case HotKey_KeyCode.KEY_CODE_ANSI_E:
      return "KEY_CODE_ANSI_E";
    case HotKey_KeyCode.KEY_CODE_ANSI_F:
      return "KEY_CODE_ANSI_F";
    case HotKey_KeyCode.KEY_CODE_ANSI_G:
      return "KEY_CODE_ANSI_G";
    case HotKey_KeyCode.KEY_CODE_ANSI_H:
      return "KEY_CODE_ANSI_H";
    case HotKey_KeyCode.KEY_CODE_ANSI_I:
      return "KEY_CODE_ANSI_I";
    case HotKey_KeyCode.KEY_CODE_ANSI_J:
      return "KEY_CODE_ANSI_J";
    case HotKey_KeyCode.KEY_CODE_ANSI_K:
      return "KEY_CODE_ANSI_K";
    case HotKey_KeyCode.KEY_CODE_ANSI_L:
      return "KEY_CODE_ANSI_L";
    case HotKey_KeyCode.KEY_CODE_ANSI_M:
      return "KEY_CODE_ANSI_M";
    case HotKey_KeyCode.KEY_CODE_ANSI_N:
      return "KEY_CODE_ANSI_N";
    case HotKey_KeyCode.KEY_CODE_ANSI_O:
      return "KEY_CODE_ANSI_O";
    case HotKey_KeyCode.KEY_CODE_ANSI_P:
      return "KEY_CODE_ANSI_P";
    case HotKey_KeyCode.KEY_CODE_ANSI_Q:
      return "KEY_CODE_ANSI_Q";
    case HotKey_KeyCode.KEY_CODE_ANSI_R:
      return "KEY_CODE_ANSI_R";
    case HotKey_KeyCode.KEY_CODE_ANSI_S:
      return "KEY_CODE_ANSI_S";
    case HotKey_KeyCode.KEY_CODE_ANSI_T:
      return "KEY_CODE_ANSI_T";
    case HotKey_KeyCode.KEY_CODE_ANSI_U:
      return "KEY_CODE_ANSI_U";
    case HotKey_KeyCode.KEY_CODE_ANSI_V:
      return "KEY_CODE_ANSI_V";
    case HotKey_KeyCode.KEY_CODE_ANSI_W:
      return "KEY_CODE_ANSI_W";
    case HotKey_KeyCode.KEY_CODE_ANSI_X:
      return "KEY_CODE_ANSI_X";
    case HotKey_KeyCode.KEY_CODE_ANSI_Y:
      return "KEY_CODE_ANSI_Y";
    case HotKey_KeyCode.KEY_CODE_ANSI_Z:
      return "KEY_CODE_ANSI_Z";
    case HotKey_KeyCode.KEY_CODE_ANSI_0:
      return "KEY_CODE_ANSI_0";
    case HotKey_KeyCode.KEY_CODE_ANSI_1:
      return "KEY_CODE_ANSI_1";
    case HotKey_KeyCode.KEY_CODE_ANSI_2:
      return "KEY_CODE_ANSI_2";
    case HotKey_KeyCode.KEY_CODE_ANSI_3:
      return "KEY_CODE_ANSI_3";
    case HotKey_KeyCode.KEY_CODE_ANSI_4:
      return "KEY_CODE_ANSI_4";
    case HotKey_KeyCode.KEY_CODE_ANSI_5:
      return "KEY_CODE_ANSI_5";
    case HotKey_KeyCode.KEY_CODE_ANSI_6:
      return "KEY_CODE_ANSI_6";
    case HotKey_KeyCode.KEY_CODE_ANSI_7:
      return "KEY_CODE_ANSI_7";
    case HotKey_KeyCode.KEY_CODE_ANSI_8:
      return "KEY_CODE_ANSI_8";
    case HotKey_KeyCode.KEY_CODE_ANSI_9:
      return "KEY_CODE_ANSI_9";
    case HotKey_KeyCode.KEY_CODE_ANSI_EQUAL:
      return "KEY_CODE_ANSI_EQUAL";
    case HotKey_KeyCode.KEY_CODE_ANSI_MINUS:
      return "KEY_CODE_ANSI_MINUS";
    case HotKey_KeyCode.KEY_CODE_ANSI_RIGHT_BRACKET:
      return "KEY_CODE_ANSI_RIGHT_BRACKET";
    case HotKey_KeyCode.KEY_CODE_ANSI_LEFT_BRACKET:
      return "KEY_CODE_ANSI_LEFT_BRACKET";
    case HotKey_KeyCode.KEY_CODE_ANSI_QUOTE:
      return "KEY_CODE_ANSI_QUOTE";
    case HotKey_KeyCode.KEY_CODE_ANSI_SEMICOLON:
      return "KEY_CODE_ANSI_SEMICOLON";
    case HotKey_KeyCode.KEY_CODE_ANSI_BACKSLASH:
      return "KEY_CODE_ANSI_BACKSLASH";
    case HotKey_KeyCode.KEY_CODE_ANSI_COMMA:
      return "KEY_CODE_ANSI_COMMA";
    case HotKey_KeyCode.KEY_CODE_ANSI_SLASH:
      return "KEY_CODE_ANSI_SLASH";
    case HotKey_KeyCode.KEY_CODE_ANSI_PERIOD:
      return "KEY_CODE_ANSI_PERIOD";
    case HotKey_KeyCode.KEY_CODE_ANSI_GRAVE:
      return "KEY_CODE_ANSI_GRAVE";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_DECIMAL:
      return "KEY_CODE_ANSI_KEYPAD_DECIMAL";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_PLUS:
      return "KEY_CODE_ANSI_KEYPAD_PLUS";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_CLEAR:
      return "KEY_CODE_ANSI_KEYPAD_CLEAR";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_DIVIDE:
      return "KEY_CODE_ANSI_KEYPAD_DIVIDE";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_ENTER:
      return "KEY_CODE_ANSI_KEYPAD_ENTER";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_MINUS:
      return "KEY_CODE_ANSI_KEYPAD_MINUS";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_EQUALS:
      return "KEY_CODE_ANSI_KEYPAD_EQUALS";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_0:
      return "KEY_CODE_ANSI_KEYPAD_0";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_1:
      return "KEY_CODE_ANSI_KEYPAD_1";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_2:
      return "KEY_CODE_ANSI_KEYPAD_2";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_3:
      return "KEY_CODE_ANSI_KEYPAD_3";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_4:
      return "KEY_CODE_ANSI_KEYPAD_4";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_5:
      return "KEY_CODE_ANSI_KEYPAD_5";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_6:
      return "KEY_CODE_ANSI_KEYPAD_6";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_7:
      return "KEY_CODE_ANSI_KEYPAD_7";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_8:
      return "KEY_CODE_ANSI_KEYPAD_8";
    case HotKey_KeyCode.KEY_CODE_ANSI_KEYPAD_9:
      return "KEY_CODE_ANSI_KEYPAD_9";
    case HotKey_KeyCode.KEY_CODE_F1:
      return "KEY_CODE_F1";
    case HotKey_KeyCode.KEY_CODE_F2:
      return "KEY_CODE_F2";
    case HotKey_KeyCode.KEY_CODE_F3:
      return "KEY_CODE_F3";
    case HotKey_KeyCode.KEY_CODE_F4:
      return "KEY_CODE_F4";
    case HotKey_KeyCode.KEY_CODE_F5:
      return "KEY_CODE_F5";
    case HotKey_KeyCode.KEY_CODE_F6:
      return "KEY_CODE_F6";
    case HotKey_KeyCode.KEY_CODE_F7:
      return "KEY_CODE_F7";
    case HotKey_KeyCode.KEY_CODE_F8:
      return "KEY_CODE_F8";
    case HotKey_KeyCode.KEY_CODE_F9:
      return "KEY_CODE_F9";
    case HotKey_KeyCode.KEY_CODE_F10:
      return "KEY_CODE_F10";
    case HotKey_KeyCode.KEY_CODE_F11:
      return "KEY_CODE_F11";
    case HotKey_KeyCode.KEY_CODE_F12:
      return "KEY_CODE_F12";
    case HotKey_KeyCode.KEY_CODE_F13:
      return "KEY_CODE_F13";
    case HotKey_KeyCode.KEY_CODE_F14:
      return "KEY_CODE_F14";
    case HotKey_KeyCode.KEY_CODE_F15:
      return "KEY_CODE_F15";
    case HotKey_KeyCode.KEY_CODE_F16:
      return "KEY_CODE_F16";
    case HotKey_KeyCode.KEY_CODE_F17:
      return "KEY_CODE_F17";
    case HotKey_KeyCode.KEY_CODE_F18:
      return "KEY_CODE_F18";
    case HotKey_KeyCode.KEY_CODE_F19:
      return "KEY_CODE_F19";
    case HotKey_KeyCode.KEY_CODE_F20:
      return "KEY_CODE_F20";
    case HotKey_KeyCode.KEY_CODE_FUNCTION:
      return "KEY_CODE_FUNCTION";
    case HotKey_KeyCode.KEY_CODE_RETURN:
      return "KEY_CODE_RETURN";
    case HotKey_KeyCode.KEY_CODE_TAB:
      return "KEY_CODE_TAB";
    case HotKey_KeyCode.KEY_CODE_SPACE:
      return "KEY_CODE_SPACE";
    case HotKey_KeyCode.KEY_CODE_DELETE:
      return "KEY_CODE_DELETE";
    case HotKey_KeyCode.KEY_CODE_ESCAPE:
      return "KEY_CODE_ESCAPE";
    case HotKey_KeyCode.KEY_CODE_COMMAND:
      return "KEY_CODE_COMMAND";
    case HotKey_KeyCode.KEY_CODE_SHIFT:
      return "KEY_CODE_SHIFT";
    case HotKey_KeyCode.KEY_CODE_CAPS_LOCK:
      return "KEY_CODE_CAPS_LOCK";
    case HotKey_KeyCode.KEY_CODE_OPTION:
      return "KEY_CODE_OPTION";
    case HotKey_KeyCode.KEY_CODE_CONTROL:
      return "KEY_CODE_CONTROL";
    case HotKey_KeyCode.KEY_CODE_RIGHT_SHIFT:
      return "KEY_CODE_RIGHT_SHIFT";
    case HotKey_KeyCode.KEY_CODE_RIGHT_OPTION:
      return "KEY_CODE_RIGHT_OPTION";
    case HotKey_KeyCode.KEY_CODE_RIGHT_CONTROL:
      return "KEY_CODE_RIGHT_CONTROL";
    case HotKey_KeyCode.KEY_CODE_VOLUME_UP:
      return "KEY_CODE_VOLUME_UP";
    case HotKey_KeyCode.KEY_CODE_VOLUME_DOWN:
      return "KEY_CODE_VOLUME_DOWN";
    case HotKey_KeyCode.KEY_CODE_MUTE:
      return "KEY_CODE_MUTE";
    case HotKey_KeyCode.KEY_CODE_HELP:
      return "KEY_CODE_HELP";
    case HotKey_KeyCode.KEY_CODE_HOME:
      return "KEY_CODE_HOME";
    case HotKey_KeyCode.KEY_CODE_PAGE_UP:
      return "KEY_CODE_PAGE_UP";
    case HotKey_KeyCode.KEY_CODE_FORWARD_DELETE:
      return "KEY_CODE_FORWARD_DELETE";
    case HotKey_KeyCode.KEY_CODE_END:
      return "KEY_CODE_END";
    case HotKey_KeyCode.KEY_CODE_PAGE_DOWN:
      return "KEY_CODE_PAGE_DOWN";
    case HotKey_KeyCode.KEY_CODE_LEFT_ARROW:
      return "KEY_CODE_LEFT_ARROW";
    case HotKey_KeyCode.KEY_CODE_RIGHT_ARROW:
      return "KEY_CODE_RIGHT_ARROW";
    case HotKey_KeyCode.KEY_CODE_DOWN_ARROW:
      return "KEY_CODE_DOWN_ARROW";
    case HotKey_KeyCode.KEY_CODE_UP_ARROW:
      return "KEY_CODE_UP_ARROW";
    case HotKey_KeyCode.KEY_CODE_ISO_SELECTION:
      return "KEY_CODE_ISO_SELECTION";
    case HotKey_KeyCode.KEY_CODE_JIS_YEN:
      return "KEY_CODE_JIS_YEN";
    case HotKey_KeyCode.KEY_CODE_JIS_UNDERSCORE:
      return "KEY_CODE_JIS_UNDERSCORE";
    case HotKey_KeyCode.KEY_CODE_JIS_KEYPAD_COMMA:
      return "KEY_CODE_JIS_KEYPAD_COMMA";
    case HotKey_KeyCode.KEY_CODE_JIS_EISU:
      return "KEY_CODE_JIS_EISU";
    case HotKey_KeyCode.KEY_CODE_JIS_KANA:
      return "KEY_CODE_JIS_KANA";
    case HotKey_KeyCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseHotKey(): HotKey {
  return { code: 0, controlIdentifier: "" };
}

export const HotKey = {
  encode(message: HotKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.controlIdentifier !== "") {
      writer.uint32(18).string(message.controlIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HotKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHotKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.controlIdentifier = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HotKey {
    return {
      code: isSet(object.code) ? hotKey_KeyCodeFromJSON(object.code) : 0,
      controlIdentifier: isSet(object.controlIdentifier) ? String(object.controlIdentifier) : "",
    };
  },

  toJSON(message: HotKey): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = hotKey_KeyCodeToJSON(message.code));
    message.controlIdentifier !== undefined && (obj.controlIdentifier = message.controlIdentifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<HotKey>, I>>(base?: I): HotKey {
    return HotKey.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HotKey>, I>>(object: I): HotKey {
    const message = createBaseHotKey();
    message.code = object.code ?? 0;
    message.controlIdentifier = object.controlIdentifier ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
