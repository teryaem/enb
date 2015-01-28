/**
 * symlink
 * =======
 *
 * Создает симлинк из одного таргета в другой. Может, например,
 * использоваться для построения `_?.css` из `?.css` для development-режима.
 *
 * **Опции**
 *
 * * *String* **fileTarget** — Исходный таргет. Обязательная опция.
 * * *String* **symlinkTarget** — Результирующий таргет. Обязательная опция.
 * * *String* **symlinkNode** — Результирующая нода.
 *
 * **Пример**
 *
 * ```javascript
 * var path = require('path');
 * var nodeDir = nodeConfig.getNodePath();
 * var publicDir = path.join(nodeDir, '../../public');
 * nodeConfig.addTech([ require('enb/techs/symlink'), {
 *   fileTarget: '?.css',
 *   symlinkTarget: '_?.css',
 *   symlinkNode: publicDir
 * } ]);
 * ```
 */
var vowFs = require('../lib/fs/async-fs');
var inherit = require('inherit');
var path = require('path');

module.exports = inherit(require('../lib/tech/base-tech'), {
    getName: function () {
        return 'symlink';
    },

    configure: function () {
        this._fileTarget = this.getRequiredOption('fileTarget');
        this._symlinkTarget = this.getRequiredOption('symlinkTarget');
        this._symlinkNode = this.getOption('symlinkNode');
    },

    getTargets: function () {
        return [this.node.unmaskTargetName(this._symlinkTarget)];
    },

    build: function () {
        var _this = this;
        var fileTarget = this.node.unmaskTargetName(this._fileTarget);
        var fileTargetPath = path.join(this.node.getDir(), fileTarget);
        var symlinkTarget = this.node.unmaskTargetName(this._symlinkTarget);
        var symlinkTargetPath = this.node.resolvePath(symlinkTarget);

        if (this._symlinkNode) {
            symlinkTargetPath = path.join(this._symlinkNode, symlinkTarget);
        }

        function createSymlink() {
            return vowFs.symLink(fileTargetPath, symlinkTargetPath).then(function () {
                _this.node.resolveTarget(symlinkTarget);
            });
        }
        return this.node.requireSources([fileTarget]).then(function () {
            return vowFs.exists(symlinkTargetPath).then(function (exists) {
                if (exists) {
                    return false;
                    // return vowFs.remove(symlinkTargetPath).then(createSymlink);
                } else {
                    return createSymlink();
                }
            });
        });
    },

    clean: function () {}
});
