import React from 'react';
import { SimpleForm, TextInput, ReferenceInput, Edit, SelectInput } from 'react-admin';






export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;