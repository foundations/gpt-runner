import { css, styled } from 'styled-components'
import { VSCodePanels } from '@vscode/webview-ui-toolkit/react'
import { withBreakpoint } from '../../helpers/with-breakpoint'

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  ${withBreakpoint('sm', css`
    max-width: 100%;
    width: 100%;
  `)}
`

export const ChatPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  ${withBreakpoint('sm', css`
    border-left: none;
  `)}
`

export const StyledVSCodePanels = styled(VSCodePanels)`
  &::part(tablist) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &::part(tabpanel) {
    height: 100%;
    overflow: hidden;
  }
`

export const SidebarTopToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
  font-size: var(--type-ramp-base-font-size);
`

export const ChatPanelPopoverTreeWrapper = styled.div`
  & .sidebar-wrapper {
    width: calc(100vw - 2rem);
    height: 50vh;
    background: var(--panel-view-background);
    padding-bottom: 0.5rem;
    max-width: 500px;

    .tree-item__children {
      border-left: none;
    }
  }
`

export const LeftSideWrapper = styled.div`
  max-width: 300px;
  min-width: 200px;
  border-right: 1px solid var(--panel-view-border);
  flex: 1;
`

export const RightSideWrapper = styled.div`
  max-width: 300px;
  min-width: 200px;
  border-left: 1px solid var(--panel-view-border);
  flex: 1;
`
