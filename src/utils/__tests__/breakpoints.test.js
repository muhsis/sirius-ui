import React from 'react'
import { mount } from 'enzyme'
import styled from 'styled-components'
import {
  DEFAULT_BREAKPOINTS,
  getBreakpoints,
  getBreakpointEntries,
  getNextBreakpoint,
  getPreviousBreakpoint,
} from '../breakpoints'

describe('breapoints utils', () => {
  let props

  beforeEach(() => {
    props = {
      theme: {
        breakpoints: {
          xs: 0,
          sm: 5,
          md: 10,
          lg: 30,
        },
      },
    }
  })

  describe('#getBreakpoints', () => {
    it('should return default breakpoints', () => {
      expect(getBreakpoints()).toEqual(DEFAULT_BREAKPOINTS)
    })

    it('should return breakpoints from theme', () => {
      expect(getBreakpoints(props)).toEqual({
        xs: 0,
        sm: 5,
        md: 10,
        lg: 30,
      })
    })
  })

  describe('#getBreakpointEntries', () => {
    it('should give sorted breakpoints entries', () => {
      expect(getBreakpointEntries()).toEqual([
        ['xs', 0],
        ['sm', 576],
        ['md', 768],
        ['lg', 992],
        ['xl', 1200],
      ])

      expect(getBreakpointEntries(props)).toEqual([
        ['xs', 0],
        ['sm', 5],
        ['md', 10],
        ['lg', 30],
      ])
    })
  })

  describe('#getNextBreakpoint', () => {
    it('should return next breakpoint', () => {
      expect(getNextBreakpoint('xs', props)).toBe('sm')
      expect(getNextBreakpoint('sm', props)).toBe('md')
      expect(getNextBreakpoint('lg', props)).toBe(null)
    })
  })

  describe('#getPreviousBreakpoint', () => {
    it('should return previous breakpoint', () => {
      expect(getPreviousBreakpoint('lg', props)).toBe('md')
      expect(getPreviousBreakpoint('md', props)).toBe('sm')
      expect(getPreviousBreakpoint('sm', props)).toBe('xs')
      expect(getPreviousBreakpoint('xs', props)).toBe(null)
    })
  })
})
