exports.ACL = {
  UNLOCK: [
    "GET:/api/workflow/time-trace",
    "POST:/api/workflow/time-trace",

    "GET:/api/workflow/time-start",
    "POST:/api/workflow/time-start",

    "GET:/api/crm/customer",

    "GET:/api/workflow/time-trace/make-file",

    "GET:/api/utils/file/download",
  ],

  UNAUTHORIZED: ["POST:/api/auth/signin", "POST:/api/auth/signup"],
};

/**
 * UNNECESSORY ENDPOINTS:
 * POST:/api/building/invite/register
 *
 * GET:/api/getBuildingsByGroupId
 * GET:/api/add_all_building_group
 *
 * GET:/api/cms/role-permission
 * POST:/api/cms/role-permission
 *  */
