import { th, mixin, unit } from '../'

describe('system utils', () => {
  let props

  beforeEach(() => {
    props = {
      theme: {
        red: 'red',
        primary: th('red'),
        secondary: 'blue',
        borderRadius: 3,
        colors: {
          primary: th('primary'),
          secondary: th('secondary'),
        },
      },
    }
  })

  describe('#th', () => {
    it('should return property from theme', () => {
      expect(th('red')(props)).toBe('red')
      expect(th('primary')(props)).toBe('red')
      expect(th('borderRadius', x => x * 2)(props)).toBe(6)

      expect(() => {
        th('foo')(props)
      }).toThrow('"foo" not found in theme')
    })
  })

  describe('#unit', () => {
    it('should automatically add unit', () => {
      const px = unit('px')
      const em = unit('em')
      const rem = unit('rem')
      expect(px(3)).toBe('3px')
      expect(em(3)).toBe('3em')
      expect(em('3px')).toBe('3px')
      expect(rem(1)).toBe('1rem')
      expect(rem(50)).toBe('50rem')
    })
  })

  describe('#mixin', () => {
    it('should call mixin defined theme', () => {
      const theme = {
        borderRadius: props => defaultRadius => ({
          borderRadius: props.radius || defaultRadius,
        }),
      }

      expect(mixin('borderRadius', '50%')({ theme })).toEqual({
        borderRadius: '50%',
      })
      expect(mixin('borderRadius', '50%')({ radius: '5px', theme })).toEqual({
        borderRadius: '5px',
      })
    })
  })
})
