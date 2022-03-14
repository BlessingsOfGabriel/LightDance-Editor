import {gql} from 'graphql-tag';
export const MockData = {
  All_Query:{
    query:gql`query InitData{
      dancer {
        name
        parts {
          name
          type
          controlData {
            frame {
              start
              fade
              editing
              id
            }
            status {
              ... on FIBER {
                color
                alpha
              }
              ... on LED {
                src
                alpha
              }
              ... on EL {
                value
              }
            }
          }
          id
        }
        positionData {
          frame {
            start
            editing
            id
          }
          x
          y
          z
        }
        id
      }
      getColors {
        color
        colorCode
      }
      controlFrameIDs
      positionFrameIDs
      ControlMap {
        frames
      }
      PosMap {
        frames
      }
      colorMap {
        colorMap
      }
      effectList {
        start
        end
        description
        id
        data
      }
      LEDMap {
        LEDMap
      }
    }`
  }
}
