/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';
import { APIV1MediaPlaylistItem } from './proApiV1MediaPlaylistItem';
import { APIV1Playlist } from './proApiV1Playlist';

export const protobufPackage = 'rv.data';

export interface APIV1AudioRequest {
  playlists?: APIV1AudioRequest_Playlists | undefined;
  playlist?: APIV1AudioRequest_Playlist | undefined;
  playlistUpdates?: APIV1AudioRequest_PlaylistUpdates | undefined;
  playlistFocused?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistActive?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistNextFocus?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistPreviousFocus?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistActiveFocus?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistIdFocus?: APIV1AudioRequest_IdentifierMessage | undefined;
  playlistFocusedTrigger?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistActiveTrigger?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistIdTrigger?: APIV1AudioRequest_IdentifierMessage | undefined;
  playlistFocusedNextTrigger?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistFocusedPreviousTrigger?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistFocusedIdTrigger?: APIV1AudioRequest_IdentifierMessage | undefined;
  playlistActiveNextTrigger?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistActivePreviousTrigger?: APIV1AudioRequest_EmptyMessage | undefined;
  playlistActiveIdTrigger?: APIV1AudioRequest_IdentifierMessage | undefined;
  playlistIdNextTrigger?: APIV1AudioRequest_IdentifierMessage | undefined;
  playlistIdPreviousTrigger?: APIV1AudioRequest_IdentifierMessage | undefined;
}

export interface APIV1AudioRequest_Playlists {}

export interface APIV1AudioRequest_Playlist {
  id: string;
  start: number;
}

export interface APIV1AudioRequest_PlaylistUpdates {
  id: string;
}

export interface APIV1AudioRequest_EmptyMessage {}

export interface APIV1AudioRequest_IdentifierMessage {
  id: string;
}

export interface APIV1AudioResponse {
  playlists?: APIV1AudioResponse_Playlists | undefined;
  playlist?: APIV1AudioResponse_Playlist | undefined;
  update?: APIV1AudioResponse_PlaylistUpdate | undefined;
  playlistFocused?: APIV1AudioResponse_FocusedPlaylist | undefined;
  playlistActive?: APIV1AudioResponse_ActivePlaylist | undefined;
  playlistNextFocus?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistPreviousFocus?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistActiveFocus?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistIdFocus?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistFocusedTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistActiveTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistIdTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistFocusedNextTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistFocusedPreviousTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistFocusedIdTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistActiveNextTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistActivePreviousTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistActiveIdTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistIdNextTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
  playlistIdPreviousTrigger?: APIV1AudioResponse_EmptyMessage | undefined;
}

export interface APIV1AudioResponse_Playlists {
  playlists: APIV1Playlist[];
}

export interface APIV1AudioResponse_Playlist {
  id: APIV1Identifier | undefined;
  items: APIV1MediaPlaylistItem[];
}

export interface APIV1AudioResponse_PlaylistUpdate {
  id: APIV1Identifier | undefined;
}

export interface APIV1AudioResponse_EmptyMessage {}

export interface APIV1AudioResponse_FocusedPlaylist {
  id: APIV1Identifier | undefined;
}

export interface APIV1AudioResponse_ActivePlaylist {
  playlist: APIV1Identifier | undefined;
  item: APIV1Identifier | undefined;
}

function createBaseAPIV1AudioRequest(): APIV1AudioRequest {
  return {
    playlists: undefined,
    playlist: undefined,
    playlistUpdates: undefined,
    playlistFocused: undefined,
    playlistActive: undefined,
    playlistNextFocus: undefined,
    playlistPreviousFocus: undefined,
    playlistActiveFocus: undefined,
    playlistIdFocus: undefined,
    playlistFocusedTrigger: undefined,
    playlistActiveTrigger: undefined,
    playlistIdTrigger: undefined,
    playlistFocusedNextTrigger: undefined,
    playlistFocusedPreviousTrigger: undefined,
    playlistFocusedIdTrigger: undefined,
    playlistActiveNextTrigger: undefined,
    playlistActivePreviousTrigger: undefined,
    playlistActiveIdTrigger: undefined,
    playlistIdNextTrigger: undefined,
    playlistIdPreviousTrigger: undefined,
  };
}

export const APIV1AudioRequest = {
  encode(
    message: APIV1AudioRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlists !== undefined) {
      APIV1AudioRequest_Playlists.encode(
        message.playlists,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.playlist !== undefined) {
      APIV1AudioRequest_Playlist.encode(
        message.playlist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.playlistUpdates !== undefined) {
      APIV1AudioRequest_PlaylistUpdates.encode(
        message.playlistUpdates,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.playlistFocused !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistFocused,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.playlistActive !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistActive,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.playlistNextFocus !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistNextFocus,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.playlistPreviousFocus !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistPreviousFocus,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.playlistActiveFocus !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistActiveFocus,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.playlistIdFocus !== undefined) {
      APIV1AudioRequest_IdentifierMessage.encode(
        message.playlistIdFocus,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.playlistFocusedTrigger !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistFocusedTrigger,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.playlistActiveTrigger !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistActiveTrigger,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.playlistIdTrigger !== undefined) {
      APIV1AudioRequest_IdentifierMessage.encode(
        message.playlistIdTrigger,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.playlistFocusedNextTrigger !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistFocusedNextTrigger,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.playlistFocusedPreviousTrigger !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistFocusedPreviousTrigger,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.playlistFocusedIdTrigger !== undefined) {
      APIV1AudioRequest_IdentifierMessage.encode(
        message.playlistFocusedIdTrigger,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.playlistActiveNextTrigger !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistActiveNextTrigger,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.playlistActivePreviousTrigger !== undefined) {
      APIV1AudioRequest_EmptyMessage.encode(
        message.playlistActivePreviousTrigger,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.playlistActiveIdTrigger !== undefined) {
      APIV1AudioRequest_IdentifierMessage.encode(
        message.playlistActiveIdTrigger,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.playlistIdNextTrigger !== undefined) {
      APIV1AudioRequest_IdentifierMessage.encode(
        message.playlistIdNextTrigger,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.playlistIdPreviousTrigger !== undefined) {
      APIV1AudioRequest_IdentifierMessage.encode(
        message.playlistIdPreviousTrigger,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1AudioRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlists = APIV1AudioRequest_Playlists.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playlist = APIV1AudioRequest_Playlist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playlistUpdates = APIV1AudioRequest_PlaylistUpdates.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.playlistFocused = APIV1AudioRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.playlistActive = APIV1AudioRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.playlistNextFocus = APIV1AudioRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.playlistPreviousFocus = APIV1AudioRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.playlistActiveFocus = APIV1AudioRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.playlistIdFocus = APIV1AudioRequest_IdentifierMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.playlistFocusedTrigger =
            APIV1AudioRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.playlistActiveTrigger = APIV1AudioRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.playlistIdTrigger =
            APIV1AudioRequest_IdentifierMessage.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.playlistFocusedNextTrigger =
            APIV1AudioRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.playlistFocusedPreviousTrigger =
            APIV1AudioRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.playlistFocusedIdTrigger =
            APIV1AudioRequest_IdentifierMessage.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.playlistActiveNextTrigger =
            APIV1AudioRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.playlistActivePreviousTrigger =
            APIV1AudioRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.playlistActiveIdTrigger =
            APIV1AudioRequest_IdentifierMessage.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.playlistIdNextTrigger =
            APIV1AudioRequest_IdentifierMessage.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.playlistIdPreviousTrigger =
            APIV1AudioRequest_IdentifierMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioRequest {
    return {
      playlists: isSet(object.playlists)
        ? APIV1AudioRequest_Playlists.fromJSON(object.playlists)
        : undefined,
      playlist: isSet(object.playlist)
        ? APIV1AudioRequest_Playlist.fromJSON(object.playlist)
        : undefined,
      playlistUpdates: isSet(object.playlistUpdates)
        ? APIV1AudioRequest_PlaylistUpdates.fromJSON(object.playlistUpdates)
        : undefined,
      playlistFocused: isSet(object.playlistFocused)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(object.playlistFocused)
        : undefined,
      playlistActive: isSet(object.playlistActive)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(object.playlistActive)
        : undefined,
      playlistNextFocus: isSet(object.playlistNextFocus)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(object.playlistNextFocus)
        : undefined,
      playlistPreviousFocus: isSet(object.playlistPreviousFocus)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(object.playlistPreviousFocus)
        : undefined,
      playlistActiveFocus: isSet(object.playlistActiveFocus)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(object.playlistActiveFocus)
        : undefined,
      playlistIdFocus: isSet(object.playlistIdFocus)
        ? APIV1AudioRequest_IdentifierMessage.fromJSON(object.playlistIdFocus)
        : undefined,
      playlistFocusedTrigger: isSet(object.playlistFocusedTrigger)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(object.playlistFocusedTrigger)
        : undefined,
      playlistActiveTrigger: isSet(object.playlistActiveTrigger)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(object.playlistActiveTrigger)
        : undefined,
      playlistIdTrigger: isSet(object.playlistIdTrigger)
        ? APIV1AudioRequest_IdentifierMessage.fromJSON(object.playlistIdTrigger)
        : undefined,
      playlistFocusedNextTrigger: isSet(object.playlistFocusedNextTrigger)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(
            object.playlistFocusedNextTrigger,
          )
        : undefined,
      playlistFocusedPreviousTrigger: isSet(
        object.playlistFocusedPreviousTrigger,
      )
        ? APIV1AudioRequest_EmptyMessage.fromJSON(
            object.playlistFocusedPreviousTrigger,
          )
        : undefined,
      playlistFocusedIdTrigger: isSet(object.playlistFocusedIdTrigger)
        ? APIV1AudioRequest_IdentifierMessage.fromJSON(
            object.playlistFocusedIdTrigger,
          )
        : undefined,
      playlistActiveNextTrigger: isSet(object.playlistActiveNextTrigger)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(
            object.playlistActiveNextTrigger,
          )
        : undefined,
      playlistActivePreviousTrigger: isSet(object.playlistActivePreviousTrigger)
        ? APIV1AudioRequest_EmptyMessage.fromJSON(
            object.playlistActivePreviousTrigger,
          )
        : undefined,
      playlistActiveIdTrigger: isSet(object.playlistActiveIdTrigger)
        ? APIV1AudioRequest_IdentifierMessage.fromJSON(
            object.playlistActiveIdTrigger,
          )
        : undefined,
      playlistIdNextTrigger: isSet(object.playlistIdNextTrigger)
        ? APIV1AudioRequest_IdentifierMessage.fromJSON(
            object.playlistIdNextTrigger,
          )
        : undefined,
      playlistIdPreviousTrigger: isSet(object.playlistIdPreviousTrigger)
        ? APIV1AudioRequest_IdentifierMessage.fromJSON(
            object.playlistIdPreviousTrigger,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1AudioRequest): unknown {
    const obj: any = {};
    if (message.playlists !== undefined) {
      obj.playlists = APIV1AudioRequest_Playlists.toJSON(message.playlists);
    }
    if (message.playlist !== undefined) {
      obj.playlist = APIV1AudioRequest_Playlist.toJSON(message.playlist);
    }
    if (message.playlistUpdates !== undefined) {
      obj.playlistUpdates = APIV1AudioRequest_PlaylistUpdates.toJSON(
        message.playlistUpdates,
      );
    }
    if (message.playlistFocused !== undefined) {
      obj.playlistFocused = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistFocused,
      );
    }
    if (message.playlistActive !== undefined) {
      obj.playlistActive = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistActive,
      );
    }
    if (message.playlistNextFocus !== undefined) {
      obj.playlistNextFocus = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistNextFocus,
      );
    }
    if (message.playlistPreviousFocus !== undefined) {
      obj.playlistPreviousFocus = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistPreviousFocus,
      );
    }
    if (message.playlistActiveFocus !== undefined) {
      obj.playlistActiveFocus = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistActiveFocus,
      );
    }
    if (message.playlistIdFocus !== undefined) {
      obj.playlistIdFocus = APIV1AudioRequest_IdentifierMessage.toJSON(
        message.playlistIdFocus,
      );
    }
    if (message.playlistFocusedTrigger !== undefined) {
      obj.playlistFocusedTrigger = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistFocusedTrigger,
      );
    }
    if (message.playlistActiveTrigger !== undefined) {
      obj.playlistActiveTrigger = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistActiveTrigger,
      );
    }
    if (message.playlistIdTrigger !== undefined) {
      obj.playlistIdTrigger = APIV1AudioRequest_IdentifierMessage.toJSON(
        message.playlistIdTrigger,
      );
    }
    if (message.playlistFocusedNextTrigger !== undefined) {
      obj.playlistFocusedNextTrigger = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistFocusedNextTrigger,
      );
    }
    if (message.playlistFocusedPreviousTrigger !== undefined) {
      obj.playlistFocusedPreviousTrigger =
        APIV1AudioRequest_EmptyMessage.toJSON(
          message.playlistFocusedPreviousTrigger,
        );
    }
    if (message.playlistFocusedIdTrigger !== undefined) {
      obj.playlistFocusedIdTrigger = APIV1AudioRequest_IdentifierMessage.toJSON(
        message.playlistFocusedIdTrigger,
      );
    }
    if (message.playlistActiveNextTrigger !== undefined) {
      obj.playlistActiveNextTrigger = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistActiveNextTrigger,
      );
    }
    if (message.playlistActivePreviousTrigger !== undefined) {
      obj.playlistActivePreviousTrigger = APIV1AudioRequest_EmptyMessage.toJSON(
        message.playlistActivePreviousTrigger,
      );
    }
    if (message.playlistActiveIdTrigger !== undefined) {
      obj.playlistActiveIdTrigger = APIV1AudioRequest_IdentifierMessage.toJSON(
        message.playlistActiveIdTrigger,
      );
    }
    if (message.playlistIdNextTrigger !== undefined) {
      obj.playlistIdNextTrigger = APIV1AudioRequest_IdentifierMessage.toJSON(
        message.playlistIdNextTrigger,
      );
    }
    if (message.playlistIdPreviousTrigger !== undefined) {
      obj.playlistIdPreviousTrigger =
        APIV1AudioRequest_IdentifierMessage.toJSON(
          message.playlistIdPreviousTrigger,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioRequest>, I>>(
    base?: I,
  ): APIV1AudioRequest {
    return APIV1AudioRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioRequest>, I>>(
    object: I,
  ): APIV1AudioRequest {
    const message = createBaseAPIV1AudioRequest();
    message.playlists =
      object.playlists !== undefined && object.playlists !== null
        ? APIV1AudioRequest_Playlists.fromPartial(object.playlists)
        : undefined;
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1AudioRequest_Playlist.fromPartial(object.playlist)
        : undefined;
    message.playlistUpdates =
      object.playlistUpdates !== undefined && object.playlistUpdates !== null
        ? APIV1AudioRequest_PlaylistUpdates.fromPartial(object.playlistUpdates)
        : undefined;
    message.playlistFocused =
      object.playlistFocused !== undefined && object.playlistFocused !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(object.playlistFocused)
        : undefined;
    message.playlistActive =
      object.playlistActive !== undefined && object.playlistActive !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(object.playlistActive)
        : undefined;
    message.playlistNextFocus =
      object.playlistNextFocus !== undefined &&
      object.playlistNextFocus !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(object.playlistNextFocus)
        : undefined;
    message.playlistPreviousFocus =
      object.playlistPreviousFocus !== undefined &&
      object.playlistPreviousFocus !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(
            object.playlistPreviousFocus,
          )
        : undefined;
    message.playlistActiveFocus =
      object.playlistActiveFocus !== undefined &&
      object.playlistActiveFocus !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(object.playlistActiveFocus)
        : undefined;
    message.playlistIdFocus =
      object.playlistIdFocus !== undefined && object.playlistIdFocus !== null
        ? APIV1AudioRequest_IdentifierMessage.fromPartial(
            object.playlistIdFocus,
          )
        : undefined;
    message.playlistFocusedTrigger =
      object.playlistFocusedTrigger !== undefined &&
      object.playlistFocusedTrigger !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(
            object.playlistFocusedTrigger,
          )
        : undefined;
    message.playlistActiveTrigger =
      object.playlistActiveTrigger !== undefined &&
      object.playlistActiveTrigger !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(
            object.playlistActiveTrigger,
          )
        : undefined;
    message.playlistIdTrigger =
      object.playlistIdTrigger !== undefined &&
      object.playlistIdTrigger !== null
        ? APIV1AudioRequest_IdentifierMessage.fromPartial(
            object.playlistIdTrigger,
          )
        : undefined;
    message.playlistFocusedNextTrigger =
      object.playlistFocusedNextTrigger !== undefined &&
      object.playlistFocusedNextTrigger !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(
            object.playlistFocusedNextTrigger,
          )
        : undefined;
    message.playlistFocusedPreviousTrigger =
      object.playlistFocusedPreviousTrigger !== undefined &&
      object.playlistFocusedPreviousTrigger !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(
            object.playlistFocusedPreviousTrigger,
          )
        : undefined;
    message.playlistFocusedIdTrigger =
      object.playlistFocusedIdTrigger !== undefined &&
      object.playlistFocusedIdTrigger !== null
        ? APIV1AudioRequest_IdentifierMessage.fromPartial(
            object.playlistFocusedIdTrigger,
          )
        : undefined;
    message.playlistActiveNextTrigger =
      object.playlistActiveNextTrigger !== undefined &&
      object.playlistActiveNextTrigger !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(
            object.playlistActiveNextTrigger,
          )
        : undefined;
    message.playlistActivePreviousTrigger =
      object.playlistActivePreviousTrigger !== undefined &&
      object.playlistActivePreviousTrigger !== null
        ? APIV1AudioRequest_EmptyMessage.fromPartial(
            object.playlistActivePreviousTrigger,
          )
        : undefined;
    message.playlistActiveIdTrigger =
      object.playlistActiveIdTrigger !== undefined &&
      object.playlistActiveIdTrigger !== null
        ? APIV1AudioRequest_IdentifierMessage.fromPartial(
            object.playlistActiveIdTrigger,
          )
        : undefined;
    message.playlistIdNextTrigger =
      object.playlistIdNextTrigger !== undefined &&
      object.playlistIdNextTrigger !== null
        ? APIV1AudioRequest_IdentifierMessage.fromPartial(
            object.playlistIdNextTrigger,
          )
        : undefined;
    message.playlistIdPreviousTrigger =
      object.playlistIdPreviousTrigger !== undefined &&
      object.playlistIdPreviousTrigger !== null
        ? APIV1AudioRequest_IdentifierMessage.fromPartial(
            object.playlistIdPreviousTrigger,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1AudioRequest_Playlists(): APIV1AudioRequest_Playlists {
  return {};
}

export const APIV1AudioRequest_Playlists = {
  encode(
    _: APIV1AudioRequest_Playlists,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioRequest_Playlists {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioRequest_Playlists();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): APIV1AudioRequest_Playlists {
    return {};
  },

  toJSON(_: APIV1AudioRequest_Playlists): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioRequest_Playlists>, I>>(
    base?: I,
  ): APIV1AudioRequest_Playlists {
    return APIV1AudioRequest_Playlists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioRequest_Playlists>, I>>(
    _: I,
  ): APIV1AudioRequest_Playlists {
    const message = createBaseAPIV1AudioRequest_Playlists();
    return message;
  },
};

function createBaseAPIV1AudioRequest_Playlist(): APIV1AudioRequest_Playlist {
  return { id: '', start: 0 };
}

export const APIV1AudioRequest_Playlist = {
  encode(
    message: APIV1AudioRequest_Playlist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.start !== 0) {
      writer.uint32(16).uint32(message.start);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioRequest_Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioRequest_Playlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.start = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioRequest_Playlist {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
    };
  },

  toJSON(message: APIV1AudioRequest_Playlist): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioRequest_Playlist>, I>>(
    base?: I,
  ): APIV1AudioRequest_Playlist {
    return APIV1AudioRequest_Playlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioRequest_Playlist>, I>>(
    object: I,
  ): APIV1AudioRequest_Playlist {
    const message = createBaseAPIV1AudioRequest_Playlist();
    message.id = object.id ?? '';
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseAPIV1AudioRequest_PlaylistUpdates(): APIV1AudioRequest_PlaylistUpdates {
  return { id: '' };
}

export const APIV1AudioRequest_PlaylistUpdates = {
  encode(
    message: APIV1AudioRequest_PlaylistUpdates,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioRequest_PlaylistUpdates {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioRequest_PlaylistUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioRequest_PlaylistUpdates {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1AudioRequest_PlaylistUpdates): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioRequest_PlaylistUpdates>, I>>(
    base?: I,
  ): APIV1AudioRequest_PlaylistUpdates {
    return APIV1AudioRequest_PlaylistUpdates.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AudioRequest_PlaylistUpdates>, I>,
  >(object: I): APIV1AudioRequest_PlaylistUpdates {
    const message = createBaseAPIV1AudioRequest_PlaylistUpdates();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1AudioRequest_EmptyMessage(): APIV1AudioRequest_EmptyMessage {
  return {};
}

export const APIV1AudioRequest_EmptyMessage = {
  encode(
    _: APIV1AudioRequest_EmptyMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioRequest_EmptyMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioRequest_EmptyMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): APIV1AudioRequest_EmptyMessage {
    return {};
  },

  toJSON(_: APIV1AudioRequest_EmptyMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioRequest_EmptyMessage>, I>>(
    base?: I,
  ): APIV1AudioRequest_EmptyMessage {
    return APIV1AudioRequest_EmptyMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioRequest_EmptyMessage>, I>>(
    _: I,
  ): APIV1AudioRequest_EmptyMessage {
    const message = createBaseAPIV1AudioRequest_EmptyMessage();
    return message;
  },
};

function createBaseAPIV1AudioRequest_IdentifierMessage(): APIV1AudioRequest_IdentifierMessage {
  return { id: '' };
}

export const APIV1AudioRequest_IdentifierMessage = {
  encode(
    message: APIV1AudioRequest_IdentifierMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioRequest_IdentifierMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioRequest_IdentifierMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioRequest_IdentifierMessage {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1AudioRequest_IdentifierMessage): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioRequest_IdentifierMessage>, I>>(
    base?: I,
  ): APIV1AudioRequest_IdentifierMessage {
    return APIV1AudioRequest_IdentifierMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AudioRequest_IdentifierMessage>, I>,
  >(object: I): APIV1AudioRequest_IdentifierMessage {
    const message = createBaseAPIV1AudioRequest_IdentifierMessage();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1AudioResponse(): APIV1AudioResponse {
  return {
    playlists: undefined,
    playlist: undefined,
    update: undefined,
    playlistFocused: undefined,
    playlistActive: undefined,
    playlistNextFocus: undefined,
    playlistPreviousFocus: undefined,
    playlistActiveFocus: undefined,
    playlistIdFocus: undefined,
    playlistFocusedTrigger: undefined,
    playlistActiveTrigger: undefined,
    playlistIdTrigger: undefined,
    playlistFocusedNextTrigger: undefined,
    playlistFocusedPreviousTrigger: undefined,
    playlistFocusedIdTrigger: undefined,
    playlistActiveNextTrigger: undefined,
    playlistActivePreviousTrigger: undefined,
    playlistActiveIdTrigger: undefined,
    playlistIdNextTrigger: undefined,
    playlistIdPreviousTrigger: undefined,
  };
}

export const APIV1AudioResponse = {
  encode(
    message: APIV1AudioResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlists !== undefined) {
      APIV1AudioResponse_Playlists.encode(
        message.playlists,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.playlist !== undefined) {
      APIV1AudioResponse_Playlist.encode(
        message.playlist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.update !== undefined) {
      APIV1AudioResponse_PlaylistUpdate.encode(
        message.update,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.playlistFocused !== undefined) {
      APIV1AudioResponse_FocusedPlaylist.encode(
        message.playlistFocused,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.playlistActive !== undefined) {
      APIV1AudioResponse_ActivePlaylist.encode(
        message.playlistActive,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.playlistNextFocus !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistNextFocus,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.playlistPreviousFocus !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistPreviousFocus,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.playlistActiveFocus !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistActiveFocus,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.playlistIdFocus !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistIdFocus,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.playlistFocusedTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistFocusedTrigger,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.playlistActiveTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistActiveTrigger,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.playlistIdTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistIdTrigger,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.playlistFocusedNextTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistFocusedNextTrigger,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.playlistFocusedPreviousTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistFocusedPreviousTrigger,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.playlistFocusedIdTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistFocusedIdTrigger,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.playlistActiveNextTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistActiveNextTrigger,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.playlistActivePreviousTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistActivePreviousTrigger,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.playlistActiveIdTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistActiveIdTrigger,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.playlistIdNextTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistIdNextTrigger,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.playlistIdPreviousTrigger !== undefined) {
      APIV1AudioResponse_EmptyMessage.encode(
        message.playlistIdPreviousTrigger,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1AudioResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlists = APIV1AudioResponse_Playlists.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playlist = APIV1AudioResponse_Playlist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.update = APIV1AudioResponse_PlaylistUpdate.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.playlistFocused = APIV1AudioResponse_FocusedPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.playlistActive = APIV1AudioResponse_ActivePlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.playlistNextFocus = APIV1AudioResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.playlistPreviousFocus =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.playlistActiveFocus = APIV1AudioResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.playlistIdFocus = APIV1AudioResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.playlistFocusedTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.playlistActiveTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.playlistIdTrigger = APIV1AudioResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.playlistFocusedNextTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.playlistFocusedPreviousTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.playlistFocusedIdTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.playlistActiveNextTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.playlistActivePreviousTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.playlistActiveIdTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.playlistIdNextTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.playlistIdPreviousTrigger =
            APIV1AudioResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioResponse {
    return {
      playlists: isSet(object.playlists)
        ? APIV1AudioResponse_Playlists.fromJSON(object.playlists)
        : undefined,
      playlist: isSet(object.playlist)
        ? APIV1AudioResponse_Playlist.fromJSON(object.playlist)
        : undefined,
      update: isSet(object.update)
        ? APIV1AudioResponse_PlaylistUpdate.fromJSON(object.update)
        : undefined,
      playlistFocused: isSet(object.playlistFocused)
        ? APIV1AudioResponse_FocusedPlaylist.fromJSON(object.playlistFocused)
        : undefined,
      playlistActive: isSet(object.playlistActive)
        ? APIV1AudioResponse_ActivePlaylist.fromJSON(object.playlistActive)
        : undefined,
      playlistNextFocus: isSet(object.playlistNextFocus)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(object.playlistNextFocus)
        : undefined,
      playlistPreviousFocus: isSet(object.playlistPreviousFocus)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(object.playlistPreviousFocus)
        : undefined,
      playlistActiveFocus: isSet(object.playlistActiveFocus)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(object.playlistActiveFocus)
        : undefined,
      playlistIdFocus: isSet(object.playlistIdFocus)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(object.playlistIdFocus)
        : undefined,
      playlistFocusedTrigger: isSet(object.playlistFocusedTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(
            object.playlistFocusedTrigger,
          )
        : undefined,
      playlistActiveTrigger: isSet(object.playlistActiveTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(object.playlistActiveTrigger)
        : undefined,
      playlistIdTrigger: isSet(object.playlistIdTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(object.playlistIdTrigger)
        : undefined,
      playlistFocusedNextTrigger: isSet(object.playlistFocusedNextTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(
            object.playlistFocusedNextTrigger,
          )
        : undefined,
      playlistFocusedPreviousTrigger: isSet(
        object.playlistFocusedPreviousTrigger,
      )
        ? APIV1AudioResponse_EmptyMessage.fromJSON(
            object.playlistFocusedPreviousTrigger,
          )
        : undefined,
      playlistFocusedIdTrigger: isSet(object.playlistFocusedIdTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(
            object.playlistFocusedIdTrigger,
          )
        : undefined,
      playlistActiveNextTrigger: isSet(object.playlistActiveNextTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(
            object.playlistActiveNextTrigger,
          )
        : undefined,
      playlistActivePreviousTrigger: isSet(object.playlistActivePreviousTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(
            object.playlistActivePreviousTrigger,
          )
        : undefined,
      playlistActiveIdTrigger: isSet(object.playlistActiveIdTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(
            object.playlistActiveIdTrigger,
          )
        : undefined,
      playlistIdNextTrigger: isSet(object.playlistIdNextTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(object.playlistIdNextTrigger)
        : undefined,
      playlistIdPreviousTrigger: isSet(object.playlistIdPreviousTrigger)
        ? APIV1AudioResponse_EmptyMessage.fromJSON(
            object.playlistIdPreviousTrigger,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1AudioResponse): unknown {
    const obj: any = {};
    if (message.playlists !== undefined) {
      obj.playlists = APIV1AudioResponse_Playlists.toJSON(message.playlists);
    }
    if (message.playlist !== undefined) {
      obj.playlist = APIV1AudioResponse_Playlist.toJSON(message.playlist);
    }
    if (message.update !== undefined) {
      obj.update = APIV1AudioResponse_PlaylistUpdate.toJSON(message.update);
    }
    if (message.playlistFocused !== undefined) {
      obj.playlistFocused = APIV1AudioResponse_FocusedPlaylist.toJSON(
        message.playlistFocused,
      );
    }
    if (message.playlistActive !== undefined) {
      obj.playlistActive = APIV1AudioResponse_ActivePlaylist.toJSON(
        message.playlistActive,
      );
    }
    if (message.playlistNextFocus !== undefined) {
      obj.playlistNextFocus = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistNextFocus,
      );
    }
    if (message.playlistPreviousFocus !== undefined) {
      obj.playlistPreviousFocus = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistPreviousFocus,
      );
    }
    if (message.playlistActiveFocus !== undefined) {
      obj.playlistActiveFocus = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistActiveFocus,
      );
    }
    if (message.playlistIdFocus !== undefined) {
      obj.playlistIdFocus = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistIdFocus,
      );
    }
    if (message.playlistFocusedTrigger !== undefined) {
      obj.playlistFocusedTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistFocusedTrigger,
      );
    }
    if (message.playlistActiveTrigger !== undefined) {
      obj.playlistActiveTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistActiveTrigger,
      );
    }
    if (message.playlistIdTrigger !== undefined) {
      obj.playlistIdTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistIdTrigger,
      );
    }
    if (message.playlistFocusedNextTrigger !== undefined) {
      obj.playlistFocusedNextTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistFocusedNextTrigger,
      );
    }
    if (message.playlistFocusedPreviousTrigger !== undefined) {
      obj.playlistFocusedPreviousTrigger =
        APIV1AudioResponse_EmptyMessage.toJSON(
          message.playlistFocusedPreviousTrigger,
        );
    }
    if (message.playlistFocusedIdTrigger !== undefined) {
      obj.playlistFocusedIdTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistFocusedIdTrigger,
      );
    }
    if (message.playlistActiveNextTrigger !== undefined) {
      obj.playlistActiveNextTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistActiveNextTrigger,
      );
    }
    if (message.playlistActivePreviousTrigger !== undefined) {
      obj.playlistActivePreviousTrigger =
        APIV1AudioResponse_EmptyMessage.toJSON(
          message.playlistActivePreviousTrigger,
        );
    }
    if (message.playlistActiveIdTrigger !== undefined) {
      obj.playlistActiveIdTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistActiveIdTrigger,
      );
    }
    if (message.playlistIdNextTrigger !== undefined) {
      obj.playlistIdNextTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistIdNextTrigger,
      );
    }
    if (message.playlistIdPreviousTrigger !== undefined) {
      obj.playlistIdPreviousTrigger = APIV1AudioResponse_EmptyMessage.toJSON(
        message.playlistIdPreviousTrigger,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioResponse>, I>>(
    base?: I,
  ): APIV1AudioResponse {
    return APIV1AudioResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioResponse>, I>>(
    object: I,
  ): APIV1AudioResponse {
    const message = createBaseAPIV1AudioResponse();
    message.playlists =
      object.playlists !== undefined && object.playlists !== null
        ? APIV1AudioResponse_Playlists.fromPartial(object.playlists)
        : undefined;
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1AudioResponse_Playlist.fromPartial(object.playlist)
        : undefined;
    message.update =
      object.update !== undefined && object.update !== null
        ? APIV1AudioResponse_PlaylistUpdate.fromPartial(object.update)
        : undefined;
    message.playlistFocused =
      object.playlistFocused !== undefined && object.playlistFocused !== null
        ? APIV1AudioResponse_FocusedPlaylist.fromPartial(object.playlistFocused)
        : undefined;
    message.playlistActive =
      object.playlistActive !== undefined && object.playlistActive !== null
        ? APIV1AudioResponse_ActivePlaylist.fromPartial(object.playlistActive)
        : undefined;
    message.playlistNextFocus =
      object.playlistNextFocus !== undefined &&
      object.playlistNextFocus !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(object.playlistNextFocus)
        : undefined;
    message.playlistPreviousFocus =
      object.playlistPreviousFocus !== undefined &&
      object.playlistPreviousFocus !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistPreviousFocus,
          )
        : undefined;
    message.playlistActiveFocus =
      object.playlistActiveFocus !== undefined &&
      object.playlistActiveFocus !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistActiveFocus,
          )
        : undefined;
    message.playlistIdFocus =
      object.playlistIdFocus !== undefined && object.playlistIdFocus !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(object.playlistIdFocus)
        : undefined;
    message.playlistFocusedTrigger =
      object.playlistFocusedTrigger !== undefined &&
      object.playlistFocusedTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistFocusedTrigger,
          )
        : undefined;
    message.playlistActiveTrigger =
      object.playlistActiveTrigger !== undefined &&
      object.playlistActiveTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistActiveTrigger,
          )
        : undefined;
    message.playlistIdTrigger =
      object.playlistIdTrigger !== undefined &&
      object.playlistIdTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(object.playlistIdTrigger)
        : undefined;
    message.playlistFocusedNextTrigger =
      object.playlistFocusedNextTrigger !== undefined &&
      object.playlistFocusedNextTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistFocusedNextTrigger,
          )
        : undefined;
    message.playlistFocusedPreviousTrigger =
      object.playlistFocusedPreviousTrigger !== undefined &&
      object.playlistFocusedPreviousTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistFocusedPreviousTrigger,
          )
        : undefined;
    message.playlistFocusedIdTrigger =
      object.playlistFocusedIdTrigger !== undefined &&
      object.playlistFocusedIdTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistFocusedIdTrigger,
          )
        : undefined;
    message.playlistActiveNextTrigger =
      object.playlistActiveNextTrigger !== undefined &&
      object.playlistActiveNextTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistActiveNextTrigger,
          )
        : undefined;
    message.playlistActivePreviousTrigger =
      object.playlistActivePreviousTrigger !== undefined &&
      object.playlistActivePreviousTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistActivePreviousTrigger,
          )
        : undefined;
    message.playlistActiveIdTrigger =
      object.playlistActiveIdTrigger !== undefined &&
      object.playlistActiveIdTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistActiveIdTrigger,
          )
        : undefined;
    message.playlistIdNextTrigger =
      object.playlistIdNextTrigger !== undefined &&
      object.playlistIdNextTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistIdNextTrigger,
          )
        : undefined;
    message.playlistIdPreviousTrigger =
      object.playlistIdPreviousTrigger !== undefined &&
      object.playlistIdPreviousTrigger !== null
        ? APIV1AudioResponse_EmptyMessage.fromPartial(
            object.playlistIdPreviousTrigger,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1AudioResponse_Playlists(): APIV1AudioResponse_Playlists {
  return { playlists: [] };
}

export const APIV1AudioResponse_Playlists = {
  encode(
    message: APIV1AudioResponse_Playlists,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.playlists) {
      APIV1Playlist.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioResponse_Playlists {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioResponse_Playlists();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlists.push(APIV1Playlist.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioResponse_Playlists {
    return {
      playlists: globalThis.Array.isArray(object?.playlists)
        ? object.playlists.map((e: any) => APIV1Playlist.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1AudioResponse_Playlists): unknown {
    const obj: any = {};
    if (message.playlists?.length) {
      obj.playlists = message.playlists.map((e) => APIV1Playlist.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioResponse_Playlists>, I>>(
    base?: I,
  ): APIV1AudioResponse_Playlists {
    return APIV1AudioResponse_Playlists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioResponse_Playlists>, I>>(
    object: I,
  ): APIV1AudioResponse_Playlists {
    const message = createBaseAPIV1AudioResponse_Playlists();
    message.playlists =
      object.playlists?.map((e) => APIV1Playlist.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1AudioResponse_Playlist(): APIV1AudioResponse_Playlist {
  return { id: undefined, items: [] };
}

export const APIV1AudioResponse_Playlist = {
  encode(
    message: APIV1AudioResponse_Playlist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.items) {
      APIV1MediaPlaylistItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioResponse_Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioResponse_Playlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(
            APIV1MediaPlaylistItem.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioResponse_Playlist {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      items: globalThis.Array.isArray(object?.items)
        ? object.items.map((e: any) => APIV1MediaPlaylistItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1AudioResponse_Playlist): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => APIV1MediaPlaylistItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioResponse_Playlist>, I>>(
    base?: I,
  ): APIV1AudioResponse_Playlist {
    return APIV1AudioResponse_Playlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioResponse_Playlist>, I>>(
    object: I,
  ): APIV1AudioResponse_Playlist {
    const message = createBaseAPIV1AudioResponse_Playlist();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.items =
      object.items?.map((e) => APIV1MediaPlaylistItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1AudioResponse_PlaylistUpdate(): APIV1AudioResponse_PlaylistUpdate {
  return { id: undefined };
}

export const APIV1AudioResponse_PlaylistUpdate = {
  encode(
    message: APIV1AudioResponse_PlaylistUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioResponse_PlaylistUpdate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioResponse_PlaylistUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioResponse_PlaylistUpdate {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: APIV1AudioResponse_PlaylistUpdate): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioResponse_PlaylistUpdate>, I>>(
    base?: I,
  ): APIV1AudioResponse_PlaylistUpdate {
    return APIV1AudioResponse_PlaylistUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AudioResponse_PlaylistUpdate>, I>,
  >(object: I): APIV1AudioResponse_PlaylistUpdate {
    const message = createBaseAPIV1AudioResponse_PlaylistUpdate();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseAPIV1AudioResponse_EmptyMessage(): APIV1AudioResponse_EmptyMessage {
  return {};
}

export const APIV1AudioResponse_EmptyMessage = {
  encode(
    _: APIV1AudioResponse_EmptyMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioResponse_EmptyMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioResponse_EmptyMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): APIV1AudioResponse_EmptyMessage {
    return {};
  },

  toJSON(_: APIV1AudioResponse_EmptyMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioResponse_EmptyMessage>, I>>(
    base?: I,
  ): APIV1AudioResponse_EmptyMessage {
    return APIV1AudioResponse_EmptyMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioResponse_EmptyMessage>, I>>(
    _: I,
  ): APIV1AudioResponse_EmptyMessage {
    const message = createBaseAPIV1AudioResponse_EmptyMessage();
    return message;
  },
};

function createBaseAPIV1AudioResponse_FocusedPlaylist(): APIV1AudioResponse_FocusedPlaylist {
  return { id: undefined };
}

export const APIV1AudioResponse_FocusedPlaylist = {
  encode(
    message: APIV1AudioResponse_FocusedPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioResponse_FocusedPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioResponse_FocusedPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioResponse_FocusedPlaylist {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: APIV1AudioResponse_FocusedPlaylist): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioResponse_FocusedPlaylist>, I>>(
    base?: I,
  ): APIV1AudioResponse_FocusedPlaylist {
    return APIV1AudioResponse_FocusedPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AudioResponse_FocusedPlaylist>, I>,
  >(object: I): APIV1AudioResponse_FocusedPlaylist {
    const message = createBaseAPIV1AudioResponse_FocusedPlaylist();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseAPIV1AudioResponse_ActivePlaylist(): APIV1AudioResponse_ActivePlaylist {
  return { playlist: undefined, item: undefined };
}

export const APIV1AudioResponse_ActivePlaylist = {
  encode(
    message: APIV1AudioResponse_ActivePlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlist !== undefined) {
      APIV1Identifier.encode(
        message.playlist,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.item !== undefined) {
      APIV1Identifier.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AudioResponse_ActivePlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioResponse_ActivePlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlist = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.item = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioResponse_ActivePlaylist {
    return {
      playlist: isSet(object.playlist)
        ? APIV1Identifier.fromJSON(object.playlist)
        : undefined,
      item: isSet(object.item)
        ? APIV1Identifier.fromJSON(object.item)
        : undefined,
    };
  },

  toJSON(message: APIV1AudioResponse_ActivePlaylist): unknown {
    const obj: any = {};
    if (message.playlist !== undefined) {
      obj.playlist = APIV1Identifier.toJSON(message.playlist);
    }
    if (message.item !== undefined) {
      obj.item = APIV1Identifier.toJSON(message.item);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioResponse_ActivePlaylist>, I>>(
    base?: I,
  ): APIV1AudioResponse_ActivePlaylist {
    return APIV1AudioResponse_ActivePlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AudioResponse_ActivePlaylist>, I>,
  >(object: I): APIV1AudioResponse_ActivePlaylist {
    const message = createBaseAPIV1AudioResponse_ActivePlaylist();
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1Identifier.fromPartial(object.playlist)
        : undefined;
    message.item =
      object.item !== undefined && object.item !== null
        ? APIV1Identifier.fromPartial(object.item)
        : undefined;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
