changeDomain.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'changedomain-item-window-create';
    }
    config.record = config.record || {object: {id: 0}};
    Ext.applyIf(config, {
        title: _('changedomain_item_create'),
        width: 650,
        autoHeight: true,
        url: changeDomain.config.connector_url,
        action: 'mgr/item/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    changeDomain.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(changeDomain.window.CreateItem, MODx.Window, {


    getFields: function (config) {
        var tabs = [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items:[{
                title: _('changedomain_details'),
                layout: 'anchor',
                items:[{
                    html: _('changedomain_details_intro'),
                    cls: 'panel-desc'
                },{
                    layout: 'column',
                    border: 'false',
                    anchor: '100%',
                    items:[{
                        columnWidth: 1
                        ,layout: 'form',
                        defaults: {msTarget: 'under'},
                        border: 'false',
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: _('changedomain_city_name'),
                            name: 'name',
                            anchor: '99%',
                            allowBlank: false,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Город. Родительный падеж Чего (В районе Москвы, В районе Ростова)',
                            name: 'name_rp',
                            anchor: '99%',
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Город. Дательный падеж Чему (по Москве, по Ростову)',
                            name: 'name_dp',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Город. Винительный падеж Что (Москву, Ростова)',
                            name: 'name_vp',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Город. Творительный падеж Чем (Москвой, Ростовом)',
                            name: 'name_tp',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Город. Предложный падеж О чем (Москве, Ростове)',
                            name: 'name_pp',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: _('changedomain_domain'),
                            name: 'domain',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'textarea',
                            fieldLabel: _('changedomain_description'),
                            name: 'description',
                            anchor: '99%',
                            allowBlank: true,
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Адрес',
                            name: 'address',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Телефон',
                            name: 'phone',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Телефон 2',
                            name: 'phone2',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Email',
                            name: 'email',
                            anchor: '99%',
                        },{
                            xtype: 'textarea',
                            fieldLabel: _('changedomain_keywords'),
                            name: 'keywords',
                            anchor: '99%',
                            allowBlank: true,
                        },{
                            xtype: 'textarea',
                            fieldLabel: _('changedomain_maps'),
                            name: 'maps',
                            height: 150,
                            anchor: '99%'
                        },{
                            xtype: 'textarea',
                            fieldLabel: _('changedomain_yandex'),
                            name: 'yandex',
                            height: 150,
                            anchor: '99%'
                        },{
                            xtype: 'xcheckbox',
                            boxLabel: _('changedomain_active'),
                            name: 'active',
                            checked: true,
                        }]
                    }]
                }]
            },{
                title: _('changedomain_options'),
                layout: 'anchor',
                items:[{
                    html: _('changedomain_options_intro'),
                    cls: 'panel-desc'
                }]
            }]
        }];
        return tabs;
    },

    loadDropZones: function () {
    }

});
Ext.reg('changedomain-item-window-create', changeDomain.window.CreateItem);


changeDomain.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'changedomain-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('changedomain_item_update'),
        width: 550,
        autoHeight: true,
        url: changeDomain.config.connector_url,
        action: 'mgr/item/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    changeDomain.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(changeDomain.window.UpdateItem, MODx.Window, {

    getFields: function (config) {

        var tabs = [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items:[{
                title: _('changedomain_details'),
                layout: 'anchor',
                items:[{
                    html: _('changedomain_details_intro'),
                    cls: 'panel-desc'
                },{
                    layout: 'column',
                    border: 'false',
                    anchor: '100%',
                    items:[{
                        columnWidth: 1
                        ,layout: 'form',
                        defaults: {msTarget: 'under'},
                        border: 'false',
                        items: [{
                            xtype: 'hidden',
                            name: 'id'
                        },{
                            xtype: 'textfield',
                            fieldLabel: _('changedomain_city_name'),
                            name: 'name',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Город. Родительный падеж Чего (В районе Москвы, В районе Ростова)',
                            name: 'name_rp',
                            anchor: '99%',
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Город. Дательный падеж Чему (по Москве, по Ростову)',
                            name: 'name_dp',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Город. Винительный падеж Что (Москву, Ростова)',
                            name: 'name_vp',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Город. Творительный падеж Чем (Москвой, Ростовом)',
                            name: 'name_tp',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Город. Предложный падеж О чем (Москве, Ростове)',
                            name: 'name_pp',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: _('changedomain_domain'),
                            name: 'domain',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'textarea',
                            fieldLabel: _('changedomain_description'),
                            name: 'description',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Адрес',
                            name: 'address',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Телефон',
                            name: 'phone',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Телефон 2',
                            name: 'phone2',
                            anchor: '99%',
                        },{
                            xtype: 'textfield',
                            fieldLabel: 'Email',
                            name: 'email',
                            anchor: '99%',
                        },{
                            fieldLabel: 'Логотип'
                            ,name: 'logo'
                            ,xtype: 'modx-combo-browser'
                            ,hideFiles: true
                            ,source:  MODx.config.default_media_source
                            ,hideSourceCombo: true
                            ,anchor: '100%'
                        },{
                            xtype: 'textarea',
                            fieldLabel: _('changedomain_keywords'),
                            name: 'keywords',
                            anchor: '99%',
                        },{
                            xtype: 'textarea',
                            fieldLabel: _('changedomain_maps'),
                            name: 'maps',
                            height: 150,
                            anchor: '99%'
                        },{
                            xtype: 'textarea',
                            fieldLabel: _('changedomain_yandex'),
                            name: 'yandex',
                            height: 150,
                            anchor: '99%'
                        },{
                            xtype: 'xcheckbox',
                            boxLabel: _('changedomain_active'),
                            name: 'active',
                            checked: true,
                        }]
                    }]
                }]
            },{
                title: _('changedomain_options'),
                layout: 'anchor',
                items:[{
                    html: _('changedomain_options_intro'),
                    cls: 'panel-desc'
                },{
                    layout: 'column',
                    border: 'false',
                    anchor: '100%',
                    items:[{
                        xtype: 'changedomain-options-items',
                        preventRender: true,
                        record: config.record.object
                    }]
                }]
            }]
        }];
        return tabs;
    },

    loadDropZones: function () {
    }

});
Ext.reg('changedomain-item-window-update', changeDomain.window.UpdateItem);