setTimeout(()=>{
  const {redux} = slackDebug.activeTeam;
  const {wysiwyg_composer, wysiwyg_composer_ios, wysiwyg_composer_webapp, ...payload} = redux.getState().experiments;
  redux.dispatch({type: '[19] Bulk add experiment assignments to redux', payload});
}, 5000)
