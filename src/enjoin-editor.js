/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

class BalloonBlockEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonBlockEditor.builtinPlugins = [
  Essentials,
  Alignment,
	FontSize,
	FontFamily,
  Highlight,
  FontColor,
	UploadAdapter,
	Autoformat,
	BlockToolbar,
	Bold,
  Italic,
  Strikethrough,
	Underline,
	BlockQuote,
	CKFinder,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
  TableToolbar
];

// BalloonBlockEditor Editor configuration.
BalloonBlockEditor.defaultConfig = {
	blockToolbar: [
    'heading',
    '|',
    'fontsize',
    'fontfamily',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'code',
    'highlight',
    'fontColor',
    '|',
    'alignment',    
		'|',
    'numberedList',
    'bulletedList',
    '|',
    'link',
    'blockquote',
    'imageUpload',
    'insertTable',
    '|',
    'undo',
    'redo'
	],
	toolbar: {
		items: [
			'heading',
      '|',
      'fontsize',
      'fontfamily',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'highlight',
      'fontColor',
      '|',
      'alignment',    
      '|',
      'numberedList',
      'bulletedList'
		]
	},
	image: {
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
  },
  // fontColor: {
  //   columns: 3, // so, you can display them in 3 columns.
  // },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'nl'
};

class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
  Alignment,
	FontSize,
	FontFamily,
  Highlight,
  FontColor,
	UploadAdapter,
	Autoformat,
	Bold,
  Italic,
  Strikethrough,
	Underline,
	BlockQuote,
	CKFinder,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	Paragraph,
	Table,
  TableToolbar
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
      'italic',
      'underline',
      '|',
			'link',
			'bulletedList',
      'numberedList',
      '|',
      'undo',
      'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'nl'
};

export default {
  BalloonBlockEditor, BalloonEditor
};