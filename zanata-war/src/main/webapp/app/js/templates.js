angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("editor/editor-content.html","<main role=\"main\"\n  scrollbar-width-container\n  class=\"Editor-content TransUnit-container\"\n  ng-class=\"{\'is-maximised\': editor.settings.hideMainNav, \'is-unit-selected\': (editor.unitSelected && editor.focused)}\">\n  <ul class=\"Editor-translations\" scrollbar-width-child>\n    <li ng-repeat=\"phrase in editorContent.phrases\">\n      <trans-unit phrase=\"phrase\" first-phrase=\"$first\" editor-context=\"editor.context\"></trans-unit>\n    </li>\n    <li ng-if=\"editorContent.phrases.length == 0\">\n      <strong translate>No content</strong>\n    </li>\n  </ul>\n</main>\n");
$templateCache.put("editor/editor-details.html","<aside class=\"editor__suggestions editor__panel\">\n\n</aside>\n");
$templateCache.put("editor/editor-header.html","<a ng-href=\"{{app.dashboardPage()}}\" class=\"Editor-loader\"\n  ng-class=\"{\'is-minimised\': editor.settings.hideMainNav}\"\n  scrollbar-width-element=\"margin-left\">\n  <logo-loader inverted=\"editor.settings.hideMainNav\"/>\n</a>\n<header role=\"banner\" class=\"Header Editor-header\" focus-on=\"editor-header\"\n  ng-class=\"{\'is-minimised\': editor.settings.hideMainNav}\">\n  <nav role=\"navigation\"\n    class=\"Editor-mainNav u-posRelative u-textCenter\">\n    <div class=\"u-posAbsoluteLeft\">\n      <a\n        href=\"{{editor.versionPage()}}\"\n        class=\"Link--invert Header-item u-inlineBlock\">\n          <span class=\"u-sPH-1-4 u-sizeWidth1 u-gtemd-hidden\"><i\n            class=\"i i--arrow-left\"></i></span>\n          <span\n            class=\"Editor-currentProject u-sm-hidden u-sML-1-2\"><span ng-bind=\"editor.projectInfo.name\">Loading </span> <span\n            class=\"u-textMuted\" ng-bind=\"editor.context.versionSlug\">Loading </span></span>\n      </a>\n      <icon name=\"chevron-right\"\n        class=\"Icon--sm u-sMH-1-4 u-textInvert u-textMuted u-sm-hidden\">\n      </icon>\n      <ul class=\"u-listInline u-inlineBlock\">\n        <li>\n          <dropdown class=\"Dropdown\">\n            <button dropdown-toggle\n              class=\"Dropdown-toggle Link--invert\"/>\n              <span ng-bind=\"editor.context.docId\"></span>\n              <icon name=\"chevron-down\" class=\"Icon--sm Dropdown-toggleIcon\"/>\n            </button>\n            <ul class=\"Dropdown-content Dropdown-content--bordered\">\n              <li ng-repeat=\"doc in editor.documents\">\n                <a ng-href=\"#/{{editor.context.projectSlug}}/{{editor.context.versionSlug}}/translate/{{editor.encodeDocId(doc.name)}}/{{editor.context.localeId}}\"\n                  class=\"Dropdown-item\">\n                  <span ng-bind=\"doc.name\"></span>\n                </a>\n              </li>\n            </ul>\n          </dropdown>\n        </li>\n        <li>\n          <dropdown class=\"Dropdown\">\n            <button dropdown-toggle\n              class=\"Dropdown-toggle Link--invert\"/>\n              <span ng-bind=\"editor.getLocaleName(editor.context.localeId)\"></span>\n              <icon name=\"chevron-down\" class=\"Icon--sm Dropdown-toggleIcon\"/>\n            </button>\n            <ul class=\"Dropdown-content Dropdown-content--bordered\">\n              <li ng-repeat=\"locale in editor.locales\">\n                <a ng-href=\"#/{{editor.context.projectSlug}}/{{editor.context.versionSlug}}/translate/{{editor.encodeDocId(editor.context.docId)}}/{{locale.localeId}}\"\n                  class=\"Dropdown-item\">\n                  <span ng-bind=\"locale.name\"></span>\n                </a>\n              </li>\n            </ul>\n          </dropdown>\n        </li>\n      </ul>\n    </div>\n    <ul class=\"u-listHorizontal u-posAbsoluteRight u-sMR-1-2\">\n      <li>\n        <dropdown class=\"Dropdown Dropdown--right u-sMV-1-2\">\n          <a dropdown-toggle\n            class=\"Dropdown-toggle Link--invert u-inlineBlock u-textNoWrap u-sPH-1-4\"\n            ng-bind=\"editor.getLocaleName(app.myInfo.locale.localeId)\"/>\n          </a>\n          <ul class=\"Dropdown-content Dropdown-content--bordered\">\n            <li ng-repeat=\"locale in app.uiLocaleList\">\n              <a ng-click=\"app.onChangeUILocale(locale)\" class=\"Dropdown-item u-textNoWrap u-textRight\">\n                <span ng-bind=\"editor.getLocaleName(locale.localeId)\"></span>\n              </a>\n            </li>\n          </ul>\n        </dropdown>\n      </li>\n      <li ng-show=\"appCtrl.PRODUCTION\">\n        <button class=\"Link--invert Header-item u-sizeWidth-1_1-2\"\n          title=\"{{\'More\'|translate}}\"><icon name=\"ellipsis\"/><span\n          class=\"u-hiddenVisually\" translate>More</span></button>\n      </li>\n      <li ng-show=\"appCtrl.PRODUCTION\">\n        <button class=\"Link--invert Header-item u-sizeWidth-1_1-2\"\n          title=\"{{\'Notifications\'|translate}}\">\n          <icon name=\"notification\" title=\"{{\'Notifications\'|translate}}\"/>\n        </button>\n      </li>\n      <li>\n        <a ng-href=\"{{app.dashboardPage()}}\" class=\"u-sizeHeight-2 u-sizeWidth-1_1-2 u-inlineBlock\" title={{app.myInfo.name}}>\n          <img class=\"u-round Header-avatar\" ng-src=\"{{app.myInfo.gravatarUrl}}\"/>\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <nav class=\"u-bgHighest u-sPH-1-2 l--cf-of u-sizeHeight-1_1-2\">\n    <button\n      class=\"Link--neutral u-sPV-1-4 u-floatLeft u-sizeHeight-1_1-2 u-sMR-1-4\">\n      <icon name=\"translate\"></icon>\n      <span class=\"u-ltemd-hidden u-sMR-1-4\" translate> Translating</span></button>\n    <div class=\"u-floatLeft\">\n      <ul class=\"u-listHorizontal u-sizeHeight-1\">\n        <li class=\"u-sm-hidden u-sMV-1-4\">\n          <div class=\"Toggle u-round u-textSecondary\">\n            <input class=\"Toggle-checkbox\" toggle-checkbox type=\"checkbox\" id=\"filter-phrases-total\" checked>\n            <label class=\"Toggle-label\" for=\"filter-phrases-total\" title=\"{{\'Total Phrases\'|translate}}\">\n              <span ng-bind=\"editor.messageStatistic.total\">0</span>\n              <span class=\"u-hiddenVisually\" translate>Total Phrases</span>\n            </label>\n          </div>\n        </li>\n        <li class=\"u-ltemd-hidden u-sMV-1-4\">\n          <div class=\"Toggle u-round u-textHighlight\">\n            <input class=\"Toggle-checkbox\" toggle-checkbox type=\"checkbox\" id=\"filter-phrases-approved\">\n            <label class=\"Toggle-label\" for=\"filter-phrases-approved\" title=\"{{\'Approved\'|translate}}\">\n              <icon name=\"dot\" class=\"Icon--xsm\"/></icon>\n              <span ng-bind=\"editor.messageStatistic.approved\">0</span>\n              <span class=\"u-hiddenVisually\" translate>Approved</span>\n            </label>\n          </div>\n        </li>\n        <li class=\"u-ltemd-hidden u-sMV-1-4\">\n          <div class=\"Toggle u-round u-textSuccess\">\n            <input class=\"Toggle-checkbox\" toggle-checkbox type=\"checkbox\" id=\"filter-phrases-translated\">\n            <label class=\"Toggle-label\" for=\"filter-phrases-translated\" title=\"{{\'Translated\'|translate}}\">\n              <icon name=\"dot\" class=\"Icon--xsm\"/></icon>\n              <span ng-bind=\"editor.messageStatistic.translated\">0</span>\n              <span class=\"u-hiddenVisually\" translate>Translated</span>\n            </label>\n          </div>\n        </li>\n        <li class=\"u-ltemd-hidden u-sMV-1-4\">\n          <div class=\"Toggle u-round u-textUnsure\">\n            <input class=\"Toggle-checkbox\" toggle-checkbox type=\"checkbox\" id=\"filter-phrases-needs-work\">\n            <label class=\"Toggle-label\" for=\"filter-phrases-needs-work\" title=\"{{\'Needs Work\'|translate}}\">\n              <icon name=\"dot\" class=\"Icon--xsm\"/></icon>\n              <span ng-bind=\"editor.messageStatistic.needswork\">0</span>\n              <span class=\"u-hiddenVisually\" translate>Needs Work</span>\n            </label>\n          </div>\n        </li>\n        <li class=\"u-ltemd-hidden u-sMV-1-4\">\n          <div class=\"Toggle u-round u-textNeutral\">\n            <input class=\"Toggle-checkbox\" toggle-checkbox type=\"checkbox\" id=\"filter-phrases-untranslated\">\n            <label class=\"Toggle-label\" for=\"filter-phrases-untranslated\" title=\"{{\'Untranslated\'|translate}}\">\n              <icon name=\"dot\" class=\"Icon--xsm\"/></icon>\n              <span ng-bind=\"editor.messageStatistic.untranslated\">0</span>\n              <span class=\"u-hiddenVisually\" translate>Untranslated</span>\n            </label>\n          </div>\n        <li ng-show=\"appCtrl.PRODUCTION\" class=\"u-sML-1-4\">\n          <button class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"{{\'Filters\'|translate}}\">\n            <icon name=\"filter\" title=\"{{\'Filters\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n          </button>\n        </li>\n        <li ng-show=\"appCtrl.PRODUCTION\">\n          <button class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"{{\'Search\'|translate}}\">\n            <icon name=\"search\" title=\"{{\'Search\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n          </button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"u-floatRight\">\n      <ul class=\"u-listHorizontal u-textCenter\">\n        <li class=\"u-smv-1-4\">\n          <a class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"First page\" ng-click=\"editor.firstPage()\">\n            <icon name=\"previous\" title=\"First page\" class=\"u-sizeWidth-1\"></icon>\n          </a>\n        </li>\n        <li class=\"u-smv-1-4\">\n          <a class=\"Link--neutral u-sizeHeight-1_1-2\"\n                  title=\"Previous page\" ng-click=\"editor.previousPage()\">\n            <icon name=\"chevron-left\" title=\"Previous page\" class=\"u-sizeWidth-1\"></icon>\n          </a>\n        </li>\n        <li class=\"u-smv-1-4 u-sizeHeight-1_1-2 u-sPH-1-4\">\n          <span ng-bind=\"editor.pageNumber()\" class=\"u-textNeutral\"></span>\n        </li>\n        <li class=\"u-smv-1-4\">\n          <a class=\"Link--neutral u-sizeHeight-1_1-2\"\n                  title=\"Next page\" ng-click=\"editor.nextPage()\">\n            <icon name=\"chevron-right\" title=\"Next page\" class=\"u-sizeWidth-1\"></icon>\n          </a>\n        </li>\n        <li class=\"u-smv-1-4\">\n          <a class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"Last page\" ng-click=\"editor.lastPage()\">\n            <icon name=\"next\" title=\"Last page\" class=\"u-sizeWidth-1\"></icon>\n          </a>\n        </li>\n        <li ng-show=\"appCtrl.PRODUCTION\">\n          <button class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"{{\'Translation Memory\'|translate}}\">\n            <icon name=\"suggestions\" title=\"{{\'Translation Memory\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n          </button>\n        </li>\n        <li ng-show=\"appCtrl.PRODUCTION\">\n          <button class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"{{\'Details\'|translate}}\">\n            <icon name=\"info\" title=\"{{\'Details\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n          </button>\n        </li>\n        <li ng-show=\"appCtrl.PRODUCTION\">\n          <button class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"{{\'Glossary\'|translate}}\">\n            <icon name=\"glossary\" title=\"{{\'Glossary\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n          </button>\n        </li>\n        <li ng-show=\"appCtrl.PRODUCTION\">\n          <button class=\"Link--neutral u-sizeHeight-1_1-2\"\n          title=\"{{\'Editor Settings\'|translate}}\">\n            <icon name=\"settings\" title=\"{{\'Editor Settings\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n          </button>\n        </li>\n        <li class=\"u-sm-hidden\">\n          <button class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"{{\'Keyboard Shortcuts\'|translate}}\"\n            ng-click=\"editor.toggleKeyboardShortcutsModal()\">\n            <icon name=\"keyboard\" title=\"{{\'Keyboard Shortcuts\'|translate}}\" class=\"u-sizeWidth-1_1-2\"\n              ng-class=\"{\'is-active\': false}\">\n            </icon>\n          </button>\n        </li>\n        <li>\n          <button class=\"Link--neutral u-sizeHeight-1_1-2\"\n            title=\"{{\'Hide Menubar\'|translate}}\"\n            ng-click=\"editor.settings.hideMainNav = !editor.settings.hideMainNav\">\n            <icon name=\"chevron-up-double\" title=\"{{\'Hide Menubar\'|translate}}\" class=\"u-sizeWidth-1_1-2\"\n              ng-class=\"{\'is-rotated\': editor.settings.hideMainNav}\">\n            </icon>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <progressbar progressbar-statistic=\"editor.messageStatistic\"></progressbar>\n\n</header>\n");
$templateCache.put("editor/editor-suggestions.html","<aside class=\"Editor-suggestions Editor-panel\">\n\n</aside>\n");
$templateCache.put("editor/editor.html","<div class=\"Editor\" scrollbar-width>\n  <div id=\"editor-header\" ng-include=\"\'editor/editor-header.html\'\"></div>\n\n  <div ui-view=\"editor-content\"></div>\n\n  <div ui-view=\"editor-suggestions\"></div>\n\n  <div ui-view=\"editor-details\"></div>\n</div>\n\n\n");
$templateCache.put("components/icon/icon.html","<svg class=\"Icon-item\">\n  <use xlink:href=\"#Icon-{{name}}\" />\n</svg>\n");
$templateCache.put("components/logo-loader/logo-loader.html","<span class=\"LogoLoader {{classes}}\">\n  <svg class=\"LogoLoader-logo\" viewBox=\"0 0 600 600\" xml:space=\"preserve\"><title>Zanata</title><g><path d=\"M541.1,480.9l-244.6-87.5l34.6-41.2l-35.8-41l-72.5-0.5L108.4,448.8L439.6,567 C479.5,546.1,514.2,516.6,541.1,480.9z\"/><path d=\"M269.4,254.4l67.9,2.4l38.1,43.5l0.4-0.2l123.1-145.5L163.4,33c-41.1,21.1-76.7,51.4-104.1,88.2l246.2,89.6 L269.4,254.4z\"/></g></svg>\n  <svg class=\"LogoLoader-loader\" viewBox=\"0 0 600 600\" xml:space=\"preserve\"><title>Loading</title><path d=\"M32.5,299.9v0.1c0,147.2,119.3,266.5,266.5,266.5c101.2,0,189.1-56.4,234.3-139.4l-46.2-46.2l-69.6,3.2 c-26.3,37-69.6,61.2-118.5,61.2c-80.2,0-145.3-65.1-145.3-145.3v-0.1l0.1,0c0-80.1,65-145,145.2-145c50.2,0,94.5,25.5,120.7,64.3 l37.3-51.8l68.4-8.1C478.3,83.9,394.6,33.5,299,33.5C151.8,33.5,32.5,152.8,32.5,299.9z\"/></svg>\n</span>\n");
$templateCache.put("components/progressbar/progressbar.html","<div\n  class=\"Progressbar\"\n  ng-class=\"{\'Progressbar--lg\': size === \'large\', \'Progressbar--sm\': size === \'small\'}\">\n  <span class=\"Progressbar-item Progressbar-approved\"\n    ng-style=\"{\'width\': style.approved.width, \'margin-left\': style.approved.marginLeft}\"></span>\n  <span class=\"Progressbar-item Progressbar-translated\"\n    ng-style=\"{\'width\': style.translated.width, \'margin-left\': style.translated.marginLeft}\"></span>\n  <span class=\"Progressbar-item Progressbar-needsWork\"\n    ng-style=\"{\'width\': style.needsWork.width, \'margin-left\': style.needsWork.marginLeft}\"></span>\n  <span class=\"Progressbar-item Progressbar-untranslated\"\n    ng-style=\"{\'width\': style.untranslated.width, \'margin-left\': style.untranslated.marginLeft}\"></span>\n</div>\n");
$templateCache.put("components/transUnit/trans-unit.html","<div class=\"TransUnit TransUnit--{{ transUnitCtrl.savingStatus.CSSCLASS || phrase.status.CSSCLASS }}\"\n  tabindex=\"0\"\n  ng-click=\"transUnitCtrl.selectTransUnit(phrase)\"\n  ng-focus=\"transUnitCtrl.selectTransUnit(phrase)\"\n  ng-class=\"{\'is-focused\': transUnitCtrl.selected, \'is-first\': firstPhrase}\">\n\n  <div class=\"TransUnit-panel TransUnit-source\"\n       ng-include=\"\'components/transUnit/source/source.html\'\"></div>\n\n  <div class=\"TransUnit-status {{transUnitCtrl.loadingClass}}\"\n       ng-include=\"\'components/transUnit/tu-status.html\'\"></div>\n\n  <div class=\"TransUnit-panel TransUnit-translation\"\n       ng-include=\"\'components/transUnit/translation/translation.html\'\"\n       ng-click=\"transUnitCtrl.focusTranslation(\'phrase-\' + phrase.id)\"></div>\n</div>\n");
$templateCache.put("components/transUnit/tu-status.html","<span class=\"u-hiddenVisually\" ng-bind=\"phrase.status.NAME\"></span>\n<ul class=\"TransUnit-metaData\">\n  <li ng-if=\"phrase.comments\"\n    class=\"TransUnit-metaDataItem TransUnit-metaDataComments\">\n    <button tabindex=\"-1\"\n      class=\"TransUnit-metaDataButton\"\n      title=\"{{phrase.comments}} comments\">\n      <icon name=\"comment\" title=\"{{Comments | translate}}\"\n        class=\"Icon--sm\"></icon>\n      <br>\n      <span ng-bind=\"phrase.comments\"></span>\n    </button>\n  </li>\n  <li ng-if=\"phrase.errors\"\n    class=\"TransUnit-metaDataItem TransUnit-metaDataErrors\">\n    <button tabindex=\"-1\"\n      class=\"TransUnit-metaDataButton\"\n      title=\"1 Error\">\n      <icon name=\"dot\" title=\"Error\" class=\"Icon--xsm u-textDanger\"></icon>\n    </button>\n  </li>\n</ul>\n");
$templateCache.put("components/transUnit/source/footer.html","<div class=\"TransUnit-panelFooter u-sm-hidden\">\n  <div class=\"u-sizeHeight-1_1-2\">\n    <button ng-show=\"appCtrl.PRODUCTION\" class=\"Link Link--neutral u-sizeHeight-1_1-2\"\n      title=\"{{\'Details\'|translate}}\">\n      <icon name=\"info\" title=\"{{\'Details\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n    </button>\n  </div>\n</div>\n");
$templateCache.put("components/transUnit/source/header.html","<div class=\"TransUnit-panelHeader\">\n  <h3 class=\"TransUnit-Heading\">{{editorContext.srcLocale.name}} <span\n    class=\"u-textMuted u-textUpper\">{{editorContext.srcLocale.localeId}}</span>\n  </h3>\n  <ul class=\"TransUnit-panelHeaderActions u-listHorizontal\">\n    <li ng-show=\"appCtrl.PRODUCTION\">\n      <button class=\"Link Link--neutral u-sizeHeight-1_1-2\"\n        title=\"{{\'Do not translate\'|translate}}\">\n        <icon name=\"block\" title=\"{{\'Do not translate\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n    </li>\n    <li class=\"u-gtemd-hidden\" ng-hide=\"transUnitCtrl.isTranslationModified(phrase)\">\n      <button class=\"Link Link--neutral u-sizeHeight-1_1-2 u-sizeWidth-1_1-2\"\n        title=\"{{\'Cancel edit\'|translate}}\" ng-click=\"transUnitCtrl.cancelEdit($event, phrase)\">\n        <icon name=\"cross\" title=\"{{\'Cancel edit\'|translate}}\"></icon>\n      </button>\n    </li>\n  </ul>\n</div>\n");
$templateCache.put("components/transUnit/source/source.html","<ng-include src=\"\'components/transUnit/source/header.html\'\" ng-if=\"transUnitCtrl.selected\"></ng-include>\n<div class=\"TransUnit-text\" ng-bind=\"phrase.source\"></div>\n<ng-include src=\"\'components/transUnit/source/footer.html\'\" ng-if=\"transUnitCtrl.selected\"></ng-include>\n");
$templateCache.put("components/transUnit/translation/footer.html","<div class=\"TransUnit-panelFooter u-cf\">\n  <div class=\"u-floatLeft u-sizeHeight-1_1-2\">\n    <ul ng-show=\"appCtrl.PRODUCTION\" class=\"u-listHorizontal\">\n      <li class=\"u-gtemd-hidden\">\n        <button class=\"Link Link--neutral u-sizeHeight-1_1-2\"\n          title=\"{{\'Details\'|translate}}\">\n          <icon name=\"info\" title=\"{{\'Details\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n        </button>\n      </li>\n      <li>\n        <button class=\"Link Link--neutral u-sizeHeight-1_1-2\"\n          title=\"{{\'Translation Memory\'|translate}}\">\n          <icon name=\"suggestions\" title=\"{{\'Translation Memory\'|translate}}\" class=\"u-sizeWidth-1_1-2\"></icon>\n        </button>\n      </li>\n    </ul>\n  </div>\n  <div class=\"u-floatRight\">\n    <span ng-show=\"!transUnitCtrl.saveButtonDisabled\"\n          class=\"u-textMeta u-sMR-1-4 u-floatLeft u-sizeLineHeight-1_1-2\" translate>\n      Save as\n    </span>\n    <dropdown class=\"Dropdown\" on-close-dropdown=\"transUnitCtrl.cancelSaveAsMode()\">\n      <div class=\"ButtonGroup ButtonGroup--hz ButtonGroup--borderCollapse\">\n        <div class=\"ButtonGroup-item\">\n          <button ng-disabled=\"transUnitCtrl.saveButtonDisabled\"\n            class=\"Button Button--{{ transUnitCtrl.saveButtonStatus.CSSCLASS }} u-sizeHeight-1_1-2 u-textCapitalize\"\n            ng-bind=\"transUnitCtrl.saveButtonText\"\n            ng-click=\"transUnitCtrl.saveAs($event, phrase, transUnitCtrl.saveButtonStatus)\">\n          </button>\n        </div>\n        <div class=\"ButtonGroup-item\"\n          ng-show=\"transUnitCtrl.saveButtonOptionsAvailable()\">\n          <button dropdown-toggle\n            class=\"Button Button--{{ transUnitCtrl.saveButtonStatus.CSSCLASS }} Button--snug u-sizeHeight-1_1-2 Dropdown-toggle\"\n            title=\"{{\'Save as…\'|translate}}\">\n            <icon name=\"chevron-down\" title=\"{{\'Save as…\'|translate}}\" class=\"Icon--sm Dropdown-toggleIcon\"></icon>\n          </button>\n        </div>\n      </div>\n      <ul class=\"Dropdown-content\">\n        <li ng-repeat=\"status in transUnitCtrl.saveButtonOptions\">\n          <button class=\"Button Button--{{status.CSSCLASS}} u-sizeFull u-textLeft u-sizeHeight-1_1-2\"\n            ng-click=\"transUnitCtrl.saveAs($event, phrase, status)\" ng-bind=\"status.NAME\">\n          </button>\n        </li>\n      </ul>\n    </dropdown>\n  </div>\n</div>\n\n");
$templateCache.put("components/transUnit/translation/header.html","<div class=\"TransUnit-panelHeader\">\n  <h3 class=\"TransUnit-Heading\">{{transUnitCtrl.getLocaleName(editorContext.localeId)}} <span\n    class=\"u-textMuted u-textUpper\">{{editorContext.localeId}}</span></h3>\n  <ul class=\"TransUnit-panelHeaderActions u-listHorizontal\">\n    <li>\n      <button class=\"Link Link--neutral u-sizeHeight-1_1-2 u-sizeWidth-1_1-2\"\n        title=\"Copy {{editorContext.srcLocale.name}} ({{editorContext.srcLocale.localeId}})\"\n        ng-click=\"transUnitCtrl.copySource($event, phrase)\">\n        <icon name=\"copy\" title=\"Copy {{editorContext.srcLocale.name}} ({{editorContext.srcLocale.localeId}})\"></icon>\n      </button>\n    </li>\n    <li class=\"u-sm-hidden\" ng-hide=\"transUnitCtrl.isTranslationModified(phrase)\">\n      <button class=\"Link Link--neutral u-sizeHeight-1_1-2 u-sizeWidth-1_1-2\"\n        title=\"{{\'Cancel edit\'|translate}}\" ng-click=\"transUnitCtrl.cancelEdit($event, phrase)\">\n        <icon name=\"cross\" title=\"{{\'Cancel edit\'|translate}}\"></icon>\n      </button>\n    </li>\n    <li ng-show=\"transUnitCtrl.isTranslationModified(phrase)\">\n      <button class=\"Link Link--neutral u-sizeHeight-1_1-2 u-sizeWidth-1_1-2\"\n        title=\"{{\'Undo edit\'|translate}}\" ng-click=\"transUnitCtrl.undoEdit($event, phrase)\">\n        <icon name=\"undo\" title=\"{{\'Undo edit\'|translate}}\"></icon>\n      </button>\n    </li>\n  </ul>\n</div>\n");
$templateCache.put("components/transUnit/translation/translation.html","<ng-include src=\"\'components/transUnit/translation/header.html\'\" ng-if=\"transUnitCtrl.selected\"></ng-include>\n\n<textarea msd-elastic\n  tabindex=\"-1\"\n  ng-change=\"transUnitCtrl.translationTextModified(phrase)\"\n  ng-model=\"phrase.newTranslation\" class=\"TransUnit-text\" rows=\"1\"\n  ng-trim=\"false\"\n  focus-on=\"phrase-{{phrase.id}}\"\n  blur-on=\"phrase-{{phrase.id}}\"\n  placeholder=\"{{\'Enter a translation…\'|translate}}\"></textarea>\n\n<ng-include src=\"\'components/transUnit/translation/footer.html\'\" ng-if=\"transUnitCtrl.selected\"></ng-include>\n\n");}]);
