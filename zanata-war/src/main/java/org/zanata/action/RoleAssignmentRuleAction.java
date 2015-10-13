/*
 * Copyright 2010, Red Hat, Inc. and individual contributors as indicated by the
 * @author tags. See the copyright.txt file in the distribution for a full
 * listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This software is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this software; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA, or see the FSF
 * site: http://www.fsf.org.
 */
package org.zanata.action;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotNull;

import javax.inject.Inject;
import javax.inject.Named;
import org.zanata.security.annotations.CheckRole;
import org.zanata.ApplicationConfiguration;
import org.zanata.dao.AccountRoleDAO;
import org.zanata.dao.RoleAssignmentRuleDAO;
import org.zanata.model.HRoleAssignmentRule;
import org.zanata.seam.framework.EntityHome;
import org.zanata.security.AuthenticationType;
import org.zanata.security.annotations.ZanataSecured;

/**
 * @author Carlos Munoz <a
 *         href="mailto:camunoz@redhat.com">camunoz@redhat.com</a>
 */
@Named("roleAssignmentRuleAction")
@org.apache.deltaspike.core.api.scope.ViewAccessScoped /* TODO [CDI] check this: migrated from ScopeType.CONVERSATION */
@ZanataSecured
@CheckRole("admin")
public class RoleAssignmentRuleAction extends EntityHome<HRoleAssignmentRule> {
    private static final long serialVersionUID = 1L;

    @Inject
    private RoleAssignmentRuleDAO roleAssignmentRuleDAO;

    @Inject
    private AccountRoleDAO accountRoleDAO;

    @Inject
    private ApplicationConfiguration applicationConfiguration;

    public List<HRoleAssignmentRule> getAllRules() {
        return roleAssignmentRuleDAO.findAll();
    }

//    @Begin /* TODO [CDI] commented out Begin conversation. verify it still works */
    public void edit(HRoleAssignmentRule rule) {
        this.setInstance(rule);
    }

    public void remove(HRoleAssignmentRule rule) {
        roleAssignmentRuleDAO.makeTransient(rule);
    }

    public void setRoleToAssign(String roleName) {
        this.getInstance().setRoleToAssign(accountRoleDAO.findByName(roleName));
    }

    @NotNull
    public String getRoleToAssign() {
        if (this.getInstance() == null
                || this.getInstance().getRoleToAssign() == null) {
            return null;
        } else {
            return this.getInstance().getRoleToAssign().getName();
        }
    }

    public List<String> getAvailablePolicyNames() {
        List<String> policyNames = new ArrayList<String>();

        if (applicationConfiguration.isInternalAuth()) {
            policyNames.add(AuthenticationType.INTERNAL.name());
        }
        if (applicationConfiguration.isOpenIdAuth()) {
            policyNames.add(AuthenticationType.OPENID.name());
        }
        if (applicationConfiguration.isJaasAuth()) {
            policyNames.add(AuthenticationType.JAAS.name());
        }
        if (applicationConfiguration.isKerberosAuth()) {
            policyNames.add(AuthenticationType.KERBEROS.name());
        }

        return policyNames;
    }
}
