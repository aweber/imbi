import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Error } from '../'
import { setDocumentTitle } from '../../utils'
import { Sidebar } from '../../components'
import { User } from '../../schema'

import { CookieCutters } from './CookieCutters'
import { Environments } from './Environments'
import { Namespaces } from './Namespaces'
import { ProjectFactTypes } from './ProjectFactTypes'
import { ProjectFactTypeEnums } from './ProjectFactTypeEnums'
import { ProjectFactTypeRanges } from './ProjectFactTypeRanges'
import { ProjectLinkTypes } from './ProjectLinkTypes'
import { ProjectTypes } from './ProjectTypes'

function Admin({ user }) {
  const { t } = useTranslation()
  setDocumentTitle(t('admin.title'))
  if (user.permissions.includes('admin') !== true)
    return <Error>{t('common.accessDenied')}</Error>
  return (
    <Fragment>
      <Sidebar title={t('admin.title')}>
        <Sidebar.Section name={t('admin.sidebar.settings')} open={true}>
          <Sidebar.MenuItem
            value={t('admin.cookieCutters.collectionName')}
            to="/ui/admin/cookie-cutters"
            icon="fas cookie"
          />
          <Sidebar.MenuItem
            value={t('admin.environments.collectionName')}
            to="/ui/admin/environments"
            icon="fas tree"
          />
          <Sidebar.MenuItem
            value={t('admin.namespaces.collectionName')}
            to="/ui/admin/namespaces"
            icon="fas boxes"
          />
          <Sidebar.MenuItem
            value={t('admin.projectFactTypes.collectionName')}
            to="/ui/admin/project-fact-types"
            icon="fas ruler"
          />
          <Sidebar.MenuItem
            value={t('admin.projectFactTypeEnums.collectionName')}
            to="/ui/admin/project-fact-type-enums"
            icon="fas list-ol"
          />
          <Sidebar.MenuItem
            value={t('admin.projectFactTypeRanges.collectionName')}
            to="/ui/admin/project-fact-type-ranges"
            icon="fas list-ol"
          />
          <Sidebar.MenuItem
            value={t('admin.projectLinkTypes.collectionName')}
            to="/ui/admin/project-link-types"
            icon="fas external-link-alt"
          />
          <Sidebar.MenuItem
            value={t('admin.projectTypes.collectionName')}
            to="/ui/admin/project-types"
            icon="fas cubes"
          />
        </Sidebar.Section>
        <Sidebar.Section name={t('admin.sidebar.userManagement')}>
          <Sidebar.MenuItem
            value="Users"
            to="/ui/admin/users"
            icon="fas user-friends"
          />
          <Sidebar.MenuItem
            value="Groups"
            to="/ui/admin/groups"
            icon="fas users"
          />
        </Sidebar.Section>
      </Sidebar>
      <div className="flex-1 py-2 px-4">
        <Route path="/ui/admin/cookie-cutters" component={CookieCutters} />
        <Route path="/ui/admin/environments" component={Environments} />
        <Route path="/ui/admin/namespaces" component={Namespaces} />
        <Route
          path="/ui/admin/project-fact-types"
          component={ProjectFactTypes}
        />
        <Route
          path="/ui/admin/project-fact-type-enums"
          component={ProjectFactTypeEnums}
        />
        <Route
          path="/ui/admin/project-fact-type-ranges"
          component={ProjectFactTypeRanges}
        />
        <Route
          path="/ui/admin/project-link-types"
          component={ProjectLinkTypes}
        />
        <Route path="/ui/admin/project-types" component={ProjectTypes} />
      </div>
    </Fragment>
  )
}

Admin.propTypes = {
  match: PropTypes.object,
  user: PropTypes.exact(User)
}

export { Admin }
